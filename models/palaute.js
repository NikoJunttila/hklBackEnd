const mongoose = require("mongoose");

const PalauteSchema = new mongoose.Schema({
    body: String,
    username: String,
    userId : Number,
    parentId: String
},
    { timestamps: true }
)

PalauteSchema.set('toJSON', {
    transform: (document, returnedObject) => {
      returnedObject.id = returnedObject._id.toString()
      delete returnedObject._id
      delete returnedObject.__v
    }
  })

  module.exports = mongoose.model("Palaute",PalauteSchema)
