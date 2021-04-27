'use strict';

module.exports = {
    db: {
        uri: process.env.MONGODB_URL || 'mongodb://11.5.0.4:27017/test',
        user: "root",
        pass: "root",
        dbName: "admin"
    },
};
