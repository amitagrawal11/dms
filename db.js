const mysql = require('mysql');

/* for promisifying async activities */
const util = require('util');

const DBPoolConnection = (config) => {
    const dbPoolConnection = mysql.createPool(config);

    // making db connection
    dbPoolConnection.getConnection((err, connection) => {
        if (err) {
            /* TODO: instead throw error if handler is available */
            console.log('DB Pool Connection Error');
        }
        if (connection) connection.release();

        connection.on('error', (err) => {
            console.log('DB Error: ', err);
        });

        return connection;
    });

    // promisifying db query and end to use async and await keywords
    dbPoolConnection.query = util.promisify(dbPoolConnection.query).bind(dbPoolConnection); // to execute queries 
    dbPoolConnection.end = util.promisify(dbPoolConnection.end).bind(dbPoolConnection); // to end db pool connection

    return dbPoolConnection;
}

// Exporting db pool connection
module.exports = DBPoolConnection;