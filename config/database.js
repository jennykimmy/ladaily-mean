var mongoose = require('mongoose');

// Use different database URIs based on whether an env var exists.
var dbUri = process.env.MONGODB_URI ||
            'mongodb://localhost/ladaily';

if (!process.env.MONGODB_URI) {
  // check that MongoD is running...
  require('net').connect(27017, 'localhost').on('error', function() {
    console.log("Yo, Turn on Mongod!!");
    process.exit(0);
  });
}

mongoose.connect(dbUri);

module.exports = mongoose;
