import express from 'express'
import {
    getPriceType,
    createPriceType
} from "../controllers/PriceTypes.js"

const router = express.Router();

router.get('/pricetype', getPriceType);
router.post('/pricetype', createPriceType);




export default router;