const express = require('express');
const AuthRouter = express.Router();
const AuthController = require('./../controllers/authController');

// adding routes here 
AuthRouter
    .post('/signin', AuthController.doLogin)
    .post('/register', AuthController.doRegister)
    .post('/revoke', AuthController.doLogout)

// exporting device routes
module.exports = AuthRouter;