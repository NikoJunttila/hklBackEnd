const galleriaRouter = require("express").Router()
const Galleria = require("../models/gym")

galleriaRouter.get("/", async (request,response)=> {
    const gyms = await Galleria.find({})

    response.json(gyms.map(gym => gym.toJSON()))
})
galleriaRouter.get("/:id", async (request, response) => {
    const event = await Galleria.findById(request.params.id)
    if (event) {
      response.json(event.toJSON())
    }
    else {
      response.status(404).end()
    }
  })
  galleriaRouter.delete("/:id", async (request, response) => {
    const event = await Galleria.findById(request.params.id)
    await Galleria.findByIdAndRemove(request.params.id)
    response.status(204).end()
  
  })
  galleriaRouter.post("/", async (request,response) => {
    const body = request.body

    const happening = new Galleria({
      text: body.text,
      img: body.img,
    })
const savedEvent = await happening.save()
response.status(201).json(savedEvent)
})

galleriaRouter.put('/:id', async (request, response) => {
  const event = await Galleria.findById(request.params.id)
  
    const body = request.body

    const updatedEvent = {
      img: body.img,
      text: body.text,
    }
   
    res = await Galleria.findByIdAndUpdate(request.params.id, updatedEvent, { new: true, runValidators: true})
   response.status(200).json(res.toJSON())
  })
module.exports = galleriaRouter