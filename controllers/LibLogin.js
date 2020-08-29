const accountService = require('./../services/account');
const userService = require('./../services/user');

async function signIn(req, res, next) {
    const { username, password } = req.body;
    const accountDocument = await accountService.findByUsername(username);
    if (!accountDocument) {
        res.redirect('/librarian/librarian-login')
        return
    }
    if (accountDocument["password"] !== password) {
        res.redirect('/librarian/librarian-login')
        return
    } 
    
    const user =  await accountService.getUserInfo(username);
    if (user.user.type !== 3 ) {
        res.redirect('/librarian/librarian-login')
        return
    }
    req.session.username = username;
    res.redirect('/librarian/')

}
module.exports = {
    signIn: signIn,

}