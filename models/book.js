const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BookSchema = new Schema({
  title: {
    type: String,
    trim: true,
    required: "Title is required"
  },
  description: {
    type: String,
    required: false
  },
  author: {
      type: Schema.Types.ObjectId,
      ref: "Author"
  },
  image: {
    type: String,
    required: false,
    data: Buffer,
  },
  link: {
    type: String,
    // data: Buffer,
  },


});

const Book = mongoose.model("Book", BookSchema);

module.exports = Book;