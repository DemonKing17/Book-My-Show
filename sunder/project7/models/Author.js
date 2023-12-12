const mongoose = require("mongoose");

const authorSchema = new mongoose.Schema(
  {
    authorName: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    books: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Book",
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);
authorSchema.virtual("bookCount").get(function () {
  return this.books.length;
});

const Author = mongoose.model("Author", authorSchema);
module.exports = Author;
