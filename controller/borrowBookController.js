const { now } = require('mongoose');
const bookModel = require('../model/bookModel');
const borrowBookModel = require('../model/borrowBokModel');
exports.borrowBook = async (req, res, next) => {
    // console.log(req.body);
    let books = await bookModel.findOne({ _id: req.body.bookID });
    if (books) {
        const borrowBookData = {
            nameStudent: req.body.nameStudent,
            studentID: req.body.studentID,
            bookID: req.body.bookID,
            bookName: req.body.bookName,
            quantity_borrow: req.body.quantity_borrow,
            borrowDate: req.body.borrowDate,
            returnDate: null
        }
        const borrowing = await borrowBookModel.create(borrowBookData);
        if (borrowing) {
            books.quantity_borrow += 1;
            books.quantity_remain -= 1;
            await books.save();
            // await bookModel.updateOne(books);
            res.json({ borrowing: borrowing });
            console.log(await bookModel.findOne({ _id: req.body.bookID }), "book model");
        }

    } else {
        res.json("Book " + req.body.bookName + " does not exist");
    }
}
exports.returnBook = async (req, res, next) => {
    const borrowed = await borrowBookModel.find({ studentID: req.body.studentID, returnDate: null });
    // console.log(borrowed);
    res.render('returnBook', { borrowed: borrowed });
}
exports.returnBookStudent = async (req, res, next) => {
    console.log(req.head);
    let borrowbooks = await borrowBookModel.findOne({ _id: req.body.id });
    if (borrowbooks) {
        borrowbooks.returnDate = new Date();
        await borrowbooks.save();
        // const borrowed = await borrowBookModel.find({ studentID: req.body.studentID, returnDate: null });
        // console.log(borrowed);
        // res.render('returnBook', { borrowed: borrowed });
        res.json({status: 200, message: "delete success"})
    }
}