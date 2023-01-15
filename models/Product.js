const mongoose = require("mongoose")

const ProductSchema = new mongoose.Schema(
  {
    categoria: String,
    hinta: Number,
    tuote: String,
    kuva: String,
    kuvaus: String,
    määrä: Number,
  },
  { timestamps: true }
);

ProductSchema.set('toJSON', {
    transform: (document, returnedObject) => {
      returnedObject.id = returnedObject._id.toString()
      delete returnedObject._id
      delete returnedObject.__v
    }
  })

module.exports = mongoose.model("Product", ProductSchema);
