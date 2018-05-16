const mongoose = require('mongoose');
const config = require('./config');

mongoose.Promise = global.Promise;

const connectToDb = async () => {
    try {
        await mongoose.connect(config.DB.HOST, { useMongoClient: true }); 
    }
    catch (err) {
        console.log(err);
    }
}

module.exports = connectToDb;