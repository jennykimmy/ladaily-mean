var mongoose = require('mongoose');

var EventSchema = new
  mongoose.Schema({
  eventType  : String,
  name    : String,
  day  : String,
  month  : String,
  time   : String,
  location   : String,
  details : String
});

var Event = mongoose.model('Event', EventSchema);

module.exports = Event;
