const mongoose = require('mongoose')

const entrySchema = new mongoose.Schema({
  date: {
    type: "String",
    required: [true, "Needs a date"]
  },
  text: {
    type: "String",
    required: [true, "Needs some text"]
  },
  photoUrl: {
    type: "String",
    required: false
  },
})

module.exports = mongoose.models.Entry || mongoose.model('Entry', entrySchema)
