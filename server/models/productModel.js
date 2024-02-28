const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    review_id: String,
    rating: String,
    email: String,
    comment: String,
});

const productSchema = new mongoose.Schema({
    upc: String,
    reviews: [reviewSchema],
});

module.exports = mongoose.model('Product', productSchema);