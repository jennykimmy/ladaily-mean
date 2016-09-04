var mongoose = require('mongoose');
var express = require('express');
var router = express.Router();

var eventsController = require('../controllers/events_controller.js')

var Event = mongoose.model('Event');

// get all
router.route('/api/events')
  .get(eventsController.index)
  .post(eventsController.create)


// get one
router.route('/api/events/:id')
  .get(eventsController.show)
  .delete(eventsController.destroy)


module.exports = router
