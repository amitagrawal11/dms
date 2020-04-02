const express = require('express');
const UserRouter = express.Router();
const UserController = require('./../controllers/userController');

// adding routes here 
UserRouter
    .get('/devices/:userId', UserController.getAllDevices)
    // Getting list of devices in db
    .get('/release/:userId', UserController.releaseDevice)
    // get device by id
    .get('/reserve/:userId', UserController.reserveDevice);

// exporting device routes
module.exports = UserRouter;