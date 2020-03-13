const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const BookSchema = new Schema({
    title: { type: Schema.Types.String, required: true },
    authors: { type: [Schema.Types.String], required: true },
    description: { type: Schema.Types.String, required: false },
    image: { type: Schema.Types.String, required: false, match: /(https?:\/\/.*\.(?:png|jpg|jpeg|gif|tiff))/i },
    link: { type: Schema.Types.String, required: false }
});

const Book = model('Book', BookSchema);
module.exports = Book;