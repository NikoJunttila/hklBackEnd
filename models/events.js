const mongoose = require("mongoose");

const EventSchema = new mongoose.Schema({
    text: String},
    { timestamps: true }
)

EventSchema.set('toJSON', {
    transform: (document, returnedObject) => {
      returnedObject.id = returnedObject._id.toString()
      delete returnedObject._id
      delete returnedObject.__v
    }
  })

  module.exports = mongoose.model("Event",EventSchema)
