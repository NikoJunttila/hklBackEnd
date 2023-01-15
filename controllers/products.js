const productRouter = require("express").Router()
const Product = require("../models/Product")


productRouter.get("/", async (request,response) => {
    const products = await Product.find({})

    response.json(products.map(a => a.toJSON()))
})
productRouter.get("/:id", async (request, response) => {
    const blog = await Product.findById(request.params.id)
    if (blog) {
      response.json(blog.toJSON())
    }
    else {
      response.status(404).end()
    }
  })
  productRouter.delete("/:id", async (request, response) => {
    const event = await Product.findById(request.params.id)
    await Product.findByIdAndRemove(request.params.id)
    response.status(204).end()
  
  })
  productRouter.post("/", async (request,response) => {
    const body = request.body

    const happening = new Product({
      categoria: body.categoria,
      hinta: body.hinta,
      tuote: body.tuote,
      kuva: body.kuva,
      kuvaus: body.kuvaus,
      määrä: body.määrä
    })
const savedEvent = await happening.save()
response.status(201).json(savedEvent)
})
productRouter.put('/:id', async (request, response) => {
  const product = await Product.findById(request.params.id)
  
    const body = request.body

    const updatedProduct = {
      categoria: body.categoria,
      hinta: body.hinta,
      tuote: body.tuote,
      kuva: body.kuva,
      kuvaus: body.kuvaus,
      määrä: body.määrä,
      id: product.id
    }
   
    res = await Product.findByIdAndUpdate(request.params.id, updatedProduct, { new: true, runValidators: true})
   response.status(200).json(res.toJSON())
  })

module.exports = productRouter



