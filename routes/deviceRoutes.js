const express = require('express');
const router = express.Router();
const DeviceController = require('./../controllers/deviceController');

// adding routes here 
router
    // Getting list of devices in db
    .get('/device/', DeviceController.getAllDevices)
    // get device by id
    .get('/device/:deviceId', DeviceController.getDeviceById)
    // Add Device Route
    .post('/device/:deviceId', DeviceController.addDevice)
    // updating routes 
    .put('/device/:deviceId', DeviceController.updateDevice)
    // deleting routes
    .delete('/device/:deviceId', DeviceController.deleteDevice);


// exporting device routes
module.exports = router;