const accountService = require('./../services/account');
const userService = require('./../services/user');

const config = require('./../config')
const crypto = require('crypto');
const cipher = crypto.createCipher('aes128', 'a password');
const decipher = crypto.createDecipher('aes128', 'a password');

async function signUp(req, res) {
    try {
        const { email, password } = req.body;

        // ma hoa pass binh thuong de luu tru trong db

        // let encryptedPass = cipher.update(password, 'utf8', 'hex');
        // encryptedPass += cipher.final('hex');
        
        const newAccountDocument = accountService.createModel(email, password);
        const newUserDoc = userService.createModel(newAccountDocument.id_user, email);;
        await accountService.insert(newAccountDocument);
        await userService.insert(newUserDoc)
        req.session.username = newAccountDocument.username;
        console.log(req.session.username);
        return res.status(200).send({ result: newAccountDocument });
    } catch (error) {
        return res.status(500).send({ message: error });
    }
}

async function signIn(req, res, next) {
    try {
        const { username, password } = req.body;
        const accountDocument = await accountService.findByUsername(username);

        // console.log(accountDocument);
        if (!accountDocument)
            return res.status(404).send({ message: config.ERROR_404 });

        // ma hoa pass tu db sang pass binh thuong
        // let decrypted = decipher.update(accountDocument["password"], 'hex', 'utf8');
        // decrypted += decipher.final('utf8');

        // if (decrypted != password)
        //     return res.status(401).send({ message: config.ERROR_401_PASSWORD });

        if (accountDocument["password"] != password)
            return res.status(401).send({ message: config.ERROR_401_PASSWORD });


        req.session.username = username;
        return res.status(200).send({ result: config.STATUS_200_OK });
    } catch (error) {
        res.status(500).send({ message: error });
    }
}

async function signOut(req, res) {
    req.session.destroy((err) => {
        if(err) {
            return console.log(err);
        }
        res.redirect('/');
    });
}


async function getByEmail(req, res) {
    try {
        const { email } = req.body;
        const accountDocument = await accountService.getByEmail(email)
        return res.status(200).send({ result: accountDocument })
    } catch (error) {
        return res.status(500).send({ message: error })
    }
}

async function removeByEmail(req, res) {
    try {
        const { email } = req.body;
        await accountService.removeByEmail(email);
        return res.status(200).send({ result: config.STATUS_200_OK })
    } catch (error) {
        return res.status(500).send({ message: error })
    }
}

async function updateByEmail(req, res) {
    try {
        const { email, password } = req.body;

        let encryptedPass = cipher.update(password, 'utf8', 'hex');
        encryptedPass += cipher.final('hex');

        await accountService.updateByEmail(email, encryptedPass);
        return res.status(200).send({ result: config.STATUS_200_OK });
    } catch (error) {
        return res.status(500).send({ message: error })
    }
}

module.exports = {
    signIn: signIn,
    signUp: signUp,
    signOut:signOut,
    removeByEmail: removeByEmail,
    getByEmail: getByEmail,
    updateByEmail: updateByEmail
}