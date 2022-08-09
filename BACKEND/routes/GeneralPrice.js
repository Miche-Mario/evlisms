import express from 'express'
import {
    getGeneralPrice,
    createGeneralPrice
} from "../controllers/GeneralPrice.js"

const router = express.Router();

router.get('/generalprice', getGeneralPrice);
router.post('/generalprice', createGeneralPrice);




export default router;