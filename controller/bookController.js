const bookModel = require('../model/bookModel');
const libraryModel = require('../model/libraryModel');
exports.addBook = async (req, res, next) => {
    console.log(req.body);
    const books = await bookModel.findOne({ bookName: req.body.bookName });
    if (!books) {
        const bookData = {
            bookName: req.body.bookName,
            price: req.body.price,
            libraryID: req.body.libraryID,
            quantity: req.body.quantity,
            quantity_borrow: 0,
            quantity_remain: req.body.quantity,
            author: req.body.author
        }
        const bookNew = await bookModel.create(bookData);
        if (bookNew) {
            const libraris = await libraryModel.find();
            const message = "Success!";
            res.render("createBook", { libraris: libraris, message : message});
            res.json({ bookNew: bookNew });
        }
    } else {
        const libraris = await libraryModel.find();
        const message = "Book " + req.body.bookName + " does exist";
        res.render("createBook", { libraris: libraris, message : message});
        // res.redirect('/book/createBook',{ message: "Hello world!"});
        // res.json("Book " + req.body.bookName + " does exist");
    }
}
exports.deleteBook = async (req, res, next) => {
    // console.log(req.body);
    let findBook = await bookModel.findOne({_id: req.body.id});
    if (findBook) {
        await findBook.remove();
        // await findBook.save();
        res.json({status: 200, message: "delete success"})
        // const allBook = await bookModel.find();
        // res.render('listAllBook', { allBook: allBook });
        // res.render('returnBook', { borrowed: borrowed });
    }
}