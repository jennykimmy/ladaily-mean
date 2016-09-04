var Event = require('../models/Event')

var mongoose = require('./database');

var events = [
  {
    eventType: "restaurant",
    name: "Pizzeria Mozza",
    day: "2",
    month: "Sep",
    time: "6:00 pm - 12:00 am",
    location: "641 Highland Ave, Los Angeles, CA 90036",
    details: "Pizzeria Mozza is a celebrated pizzeria. Pizzeria Mozza is owned and operated by Mario Batali, Joe Bastianich and Nancy Silverton."
  }
]

Event.remove({}, function(err) {
    if (err) console.log(err);
    Event.create(events, function(err, events) {
      if (err) {
        console.log(err);
      } else {
        console.log("Database seeded with " + events.length  + " events.");
        mongoose.connection.close();
      }
      process.exit();
    });
  });
