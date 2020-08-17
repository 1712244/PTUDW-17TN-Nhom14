const accountController = require('./../../controllers/account');
const router = require('express').Router()

module.exports = () => {
    router.post("/account/sign-up", accountController.signUp);
    router.post("/account/sign-in", accountController.signIn);
    router.get("/account/get-by-email", accountController.getByEmail);
    router.post("/account/update-by-email", accountController.updateByEmail);
    router.delete("/account/remove-by-email", accountController.removeByEmail);
    return router;
}