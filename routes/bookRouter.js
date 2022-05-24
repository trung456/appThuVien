const express = require('express');
const route = express.Router();
const multer = require('multer');
const upload = multer();
const libraryModel = require('../model/libraryModel');
const bookModel = require('../model/bookModel');
const bookController = require('../controller/bookController');
route.get('/createBook', async (req, res) => {
    const libraris = await libraryModel.find();
    // console.log(libraris);
    const message = "";
    // console.log(message);
    res.render('createBook', { libraris: libraris, message: message })
});

route.post('/createBook', upload.none(), bookController.addBook);
route.get('/listAllBook', async (req, res) => {
    const allBook = await bookModel.find();
    res.render('listAllBook', { allBook: allBook });
});
route.post('/deleteBook', upload.none(), bookController.deleteBook);

module.exports = route;