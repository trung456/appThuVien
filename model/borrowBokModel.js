const mongoose = require('mongoose');
const schema = mongoose.Schema;
const borrowBookSchema = new schema({
    nameStudent: String,
    studentID: Number,
    bookID: {
        type: schema.Types.ObjectId,
        ref: "bookID"
    },
    bookName: String,
    quantity_borrow: Number,
    borrowDate: Date,
    returnDate: Date
})
const BorrowBook = mongoose.model('BorrowBook',borrowBookSchema);
module.exports = BorrowBook;