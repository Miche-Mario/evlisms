import express from 'express'
import {
    getPrices,
    createPrices,
    getCoursesPrice
} from "../controllers/Prices.js"

const router = express.Router();

router.get('/prices', getPrices);
router.post('/coursesprice', getCoursesPrice);
router.post('/prices', createPrices);




export default router;