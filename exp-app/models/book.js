const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  selection: { type: String, required: true },
  wish: { type: String, required: true }, 
  photo: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

const Book = mongoose.model("Request", bookSchema);

module.exports = Book;
