const Router = require('express');
const { getReviews, postReview } = require('../controllers/reviewController');

const router = Router();

router.get('/add-review/:upc', getReviews);
router.post('/reviews/:upc', postReview);

module.exports = router;