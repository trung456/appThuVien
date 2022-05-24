const mongoose = require('mongoose');
const schema = mongoose.Schema;
const bookSchema = new schema({
    bookName: String,
    price: Number,
    libraryID: {
        type: schema.Types.ObjectId,
        ref: "libraryID"
    },
    quantity: Number,
    quantity_borrow: Number,
    quantity_remain: Number,
    author: String
})
const Book = mongoose.model('Book',bookSchema);
module.exports = Book;