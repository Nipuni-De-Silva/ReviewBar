const productModel = require('../models/productModel');

const postReview = async (req, res) => {
    try {
        const { upc } = req.params;
        const reviewData = req.body;
    
        let product = await productModel.findOne({ upc: upc });
    
        if (!product) {
        product = new productModel({ upc: upc, reviews: [] });
        }
    
        product.reviews.push(reviewData);
    
        await product.save();
    
        res.json(product);
    } catch (error) {
        console.error(error);
    }
}

const getReviews = async (req, res) => {
    try {
        const { upc } = req.params;
    
        const product = await productModel.findOne({ upc: upc });
    
        if (!product) {
        res.status(404).json({ message: 'Product not found' });
        } else {
        res.json(product.reviews);
        }
    } catch (error) {
        console.error(error);
    }
}

module.exports = { postReview, getReviews };