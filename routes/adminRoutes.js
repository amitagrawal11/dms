const express = require('express');
const router = express.Router();
const deviceRoutes = require('./deviceRoutes');

// exporting device routes
module.exports = deviceRoutes;