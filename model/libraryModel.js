const mongoose = require('mongoose');
const schema = mongoose.Schema;
const librarySchema = new schema({
    libraryName: String,
    librarian: String
})
const Library = mongoose.model('Library',librarySchema);
module.exports = Library;