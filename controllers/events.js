const Event = require("../models/events");
const eventsRouter = require("express").Router()

eventsRouter.get("/", async (request,response)=> {
    const events = await Event.find({})

    response.json(events.map(event => event.toJSON()))
})
eventsRouter.get("/:id", async (request, response) => {
    const event = await Event.findById(request.params.id)
    if (event) {
      response.json(event.toJSON())
    }
    else {
      response.status(404).end()
    }
  })
  eventsRouter.delete("/:id", async (request, response) => {
    const event = await Event.findById(request.params.id)
    await Event.findByIdAndRemove(request.params.id)
    response.status(204).end()
  
  })
eventsRouter.post("/", async (request,response) => {
    const body = request.body

    const happening = new Event({
text: body.text,
    })
const savedEvent = await happening.save()
response.status(201).json(savedEvent)

})
eventsRouter.put('/:id', async (request, response) => {
  const event = await Event.findById(request.params.id)
  
    const body = request.body

    const updatedEvent = {
      text: body.text,
      id: event.id,
    }
   
    res = await Event.findByIdAndUpdate(request.params.id, updatedEvent, { new: true, runValidators: true})
   response.status(200).json(res.toJSON())
  })

module.exports = eventsRouter