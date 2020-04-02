const express = require('express');
const expressSession = require('express-session');
const bodyParser = require('body-parser');

/* Importing external modules */
const app = express();
const config = require('./config/config');
const DbPoolConnection = require('./db')(config.database);

/* Routes */
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const adminRoutes = require('./routes/adminRoutes');

/* Setup App */
app.use(expressSession({            // sessionid per request
    secret: config.secretSessionKey,
    resave: true,
    saveUninitialized: true
}));
app.use(bodyParser.json());

// plugin routes and testing routes
app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes);
app.use('/api/admin', adminRoutes);

// now testing db connection
app.listen(config.port, async function () {
    // try {
    //     // now test db connection by fetching
    //     const dbList = await DbPoolConnection.query('show databases');
    //     console.log('dbList : ', dbList);
    // } catch (err) {
    //     console.log('Error while getting database list');
    // }

    console.log('Node App Is running on port ', config.port);
})