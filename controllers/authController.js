const { uuid } = require('uuidv4');
const config = require('./../config/config');
const UrlStore = require('./../dao/UrlStore');
const CommonUtils = require('./../commons/utils');
const DbPoolConnection = require('./../db')(config.database);

function AuthController() {
    /* To destroy session */
    const destroySession = async (req) => {
        return new Promise((resolve, reject) => {
            return req.session.destroy(err => {
                if (err) {
                    logger.error('There was an error while destroying user session.' + err);
                    reject(err);
                }
                logger.debug('user session is destroyed completely');
                resolve();
            });
        });
    };

    /* TODO: here OAuth to be impletemented, but currntly using simple login with db check */
    const doLogin = async (req, res) => {
        // as per user permission, return user related devices
        const userPayload = req.body;       // { username: "admin", password: "password"}
        if (!userPayload || !CommonUtils.isObjectNotEmpty(userPayload)) {
            res.status(400).send('Bad Paramters');
        }

        try {
            /* TODO: Add Auth Middleware function to validate each body object if it is valid or not  */
            const dbUser = await DbPoolConnection.query(UrlStore.getUserLoginQuery(userPayload.username, userPayload.password));
            if (CommonUtils.isObjectNotEmpty(dbUser)) {
                // send cookie info to browser
                res.cookie('dms', dbUser.guid, { secure: true, https: true, maxAge: 3600 });
                res.send('User Authenticated Successfully').status(200);
            } else {
                res.send('User does not exist');
            }
        } catch (err) {
            console.log('Error while getting user from db ', err);
            res.send('Internal Server Error').status(500);
        }
    };

    const doRegister = async (req, res) => {
        // as per user permission, return user related devices
        const userPayload = req.body;       // { username: "admin", password: "password"}
        if (!userPayload || !CommonUtils.isObjectNotEmpty(userPayload)) {
            res.status(400).send('Bad Paramters');
        }

        try {
            // check if user already exists in db or not
            /* TODO: Password needs to be encrypted */
            const dbUser = await DbPoolConnection.query(UrlStore.getUserLoginQuery(userPayload.username, userPayload.password));
            if (!CommonUtils.isObjectNotEmpty(dbUser)) {
                const { name, role, username, password } = userPayload;
                await DbPoolConnection.query(UrlStore.getUserRegistrationQuery(uuid(), name, role, username, password));
                res.send('User Created Successfully').status(200);
            } else {
                res.send('User already exists').status(200);
            }
        } catch (err) {
            console.log('Error while getting user from db', err);
            res.send('Internal Server Error').status(500);
        }
    }

    const doLogout = async (req, res) => {
        try {
            // destroying session 
            await destroySession(req);
            res.send('Logged out successfully').status(200);
        } catch (err) {
            console.log('Error while destroying session ');
            res.send('Internal Server Error').status(500);
        }
    };

    return {
        doLogin, doLogout, doRegister
    }
}

module.exports = AuthController();