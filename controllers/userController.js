const { uuid } = require('uuidv4');
const config = require('./../config/config');
const UrlStore = require('./../dao/UrlStore');
const CommonUtils = require('./../commons/utils');
const DbPoolConnection = require('./../db')(config.database);

function UserController() {
    const getAllDevices = async (req, res) => {
        const userId = req.params.userId;
        try {
            const devices = await DbPoolConnection.query(UrlStore.getAllDevicesByUserQuery(userId));
            res.json(devices);
        } catch (err) {
            console.log('Error while getting devices for user : ', userId);
            res.send('Internal Server Error').status(500);
        }
    };

    const releaseDevice = async (req, res) => {
        res.send('releaseDevice is working fine');
    };

    const reserveDevice = async (req, res) => {
        res.send('reserveDevice is working fine');
    };

    return {
        getAllDevices, releaseDevice, reserveDevice
    }
}

module.exports = UserController();