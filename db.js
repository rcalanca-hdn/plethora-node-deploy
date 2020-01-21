require('dotenv').config()

var mongoose = require('mongoose')

mongoose.connect(process.env.DATABASE_URL, { useUnifiedTopology: true, useNewUrlParser: true, })
    .then(() => console.log('DB Connected!'))
    .catch(err => { console.log(`DB Connection Error: ${err.message}`); });

mongoose.connection.on('error', function (err) {
    console.log(error("Mongoose default connection has occured " + err + " error"));
});

mongoose.connection.on('disconnected', function () {
    console.log(disconnected("Mongoose default connection is disconnected"));
});

process.on('SIGINT', function () {
    mongoose.connection.close(function () {
        console.log('Mongoose default connection disconnected through app termination');
        process.exit(0);
    });
});
module.exports = mongoose