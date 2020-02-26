const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  synopsis: String,
  date: { type: Date, default: Date.now },
  name: { type: String, required: true },
  email: { type: String, required: true },
  selection: { type: String, required: true },
  wish: { type: String, required: true }, 
  photo: { type: String, required: true }
});

const Book = mongoose.model("Request", bookSchema);

module.exports = Book;
