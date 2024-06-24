const express = require("express");
const { readAlphabet, updateAlphabet } = require("../controller/controller_alphabet");
const { ValueFromDB,} = require("../controller/controller_Checkname");
const { controller_login, controllerReadUser, controllerCreateUser, controllerUpdateUser, controllerDeleteUser } = require("../controller/controller_User");
const router = express.Router();
const resfullapi = (req,res)=>{
    router.get('/alphabet',readAlphabet);
    router.put('/update',updateAlphabet);
    router.post('/check_name',ValueFromDB);
    //user
    router.get('/user',controllerReadUser);
    router.post('/create',controllerCreateUser);
    router.put('/update_user',controllerUpdateUser);
    router.delete('/delete',controllerDeleteUser);
    //login
    router.post('/login',controller_login);
    return req.use('/api',router);
}
module.exports = resfullapi;     