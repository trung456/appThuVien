const express = require('express');
const route = express.Router();
const multer = require('multer');
const upload = multer();
const libraryController = require('../controller/libraryController');
route.get('/createLibrary',(req,res)=>{res.render('createLibrary')});
route.post('/createLibrary',upload.none(),libraryController.addLibrary);

module.exports = route;