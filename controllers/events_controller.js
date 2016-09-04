var Event = require('../models/event')

function index(req, res){
  Event.find({},
    function(err, events) {
      if(err) res.json({msg: "Cannot find any events"})

      res.json({events: events})
    })
}

function create(req, res) {
  var event = new Event(req.body)

  event.save(function(err) {
    if(err) res.json({msg: "You failed at making an event because " + err})

    res.json({event: event})
  })
}


function show(req, res) {
  var id = req.params.id

  Event.findById({_id: id},
  function(err, event) {
    if(err) res.json({msg: "I can't show you this event, because " + err})

    res.json({event: event})
  })
}


function destroy(req, res) {
  var id = req.params.// IDEA:

  Event.remove({_id: id},
    function(err) {
      if(err) res.json({msg: "I can't delete this because " + err})

      res.json({msg: "Event successfully deleted"})
    })
}








module.exports = {
  index: index,
  create: create,
  show: show,
  destroy: destroy
}
