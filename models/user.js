const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  name: {
    type: "String"
  },
  journal: {
    type: "Array",
  }
}
