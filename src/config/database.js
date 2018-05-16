const mongoose = require('mongoose');
const config = require('./config');

mongoose.Promise = global.Promise;

exports.connect = async () => {
    try {
        await mongoose.connect(config.DB.HOST, { useMongoClient: true }); 
    }
    catch (err) {
        console.log(err);
    }
}

mongoose.connection.on("error", function(err) {
  console.error('Failed to connect to DB ' + config.DB.HOST + ' on startup ', err);
});

mongoose.connection.on("connected", function(ref) {
  console.log("Connected to " + config.DB.HOST + " DB!");
});
