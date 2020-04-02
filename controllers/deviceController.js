const { uuid } = require('uuidv4');
const config = require('./../config/config');
const UrlStore = require('./../dao/UrlStore');
const CommonUtils = require('./../commons/utils');
const DbPoolConnection = require('./../db')(config.database);

function DeviceController() {

    const getAllDevices = async (req, res) => {
        try {
            // check if user already exists in db or not
            // const dbUser = await DbPoolConnection.query(UrlStore.getAllDevicesByUserQuery());

        } catch (err) {
            console.log('Error while getting user from db', err);
            res.send('Internal Server Error').status(500);
        }
        res.send('getAllDevices is working fine');
    };


    const addDevice = async (req, res) => {
        res.send('addDevice is working fine');
    };
    const getDeviceById = async (req, res) => {
        res.send('getDeviceById is working fine');
    };
    const updateDevice = async (req, res) => {
        res.send('updateDevice is working fine');
    };
    const deleteDevice = async (req, res) => {
        res.send('deleteDevice is working fine');
    };

    return {
        getAllDevices,
        getDeviceById,
        addDevice,
        updateDevice,
        deleteDevice
    }
}

// exporting DeviceController
module.exports = DeviceController();    // since it will return all methods 