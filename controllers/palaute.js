const Palaute = require("../models/palaute");
const palautesRouter = require("express").Router()

palautesRouter.get("/", async (request,response)=> {
    const palautes = await Palaute.find({})

    response.json(palautes.map(palaute => palaute.toJSON()))
})
palautesRouter.get("/:id", async (request, response) => {
    const palaute = await Palaute.findById(request.params.id)
    if (palaute) {
      response.json(palaute.toJSON())
    }
    else {
      response.status(404).end()
    }
  })
  palautesRouter.delete("/:id", async (request, response) => {
    const palaute = await Palaute.findById(request.params.id)
    await Palaute.findByIdAndRemove(request.params.id)
    response.status(204).end()
  
  })
palautesRouter.post("/", async (request,response) => {
    const body = request.body

    const happening = new Palaute({
body: body.body,
username: body.username,
userId: body.userId,
parentId: body.parentId
    })
const savedpalaute = await happening.save()
response.status(201).json(savedpalaute)

})


palautesRouter.put('/:id', async (request, response) => {
  const palaute = await Palaute.findById(request.params.id)
  
    const body = request.body

    const updatedPalaute = {
      body: body.body,
      username: palaute.username,
      userId: palaute.userId,
      parentId: palaute.parentId,
      id: palaute.id,
    }
   
    res = await Palaute.findByIdAndUpdate(request.params.id, updatedPalaute, { new: true, runValidators: true})
   response.status(200).json(res.toJSON())
  })

module.exports = palautesRouter