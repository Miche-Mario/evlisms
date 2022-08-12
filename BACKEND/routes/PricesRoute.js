import express from 'express'
import {
    getPrices,
    createPrices,
    getPricesById
} from "../controllers/Prices.js"

const router = express.Router();

router.get('/prices', getPrices);
router.post('/pricesprice', getPricesById);
router.post('/prices', createPrices);




export default router;