import express from 'express'
import {
    getPurchase,
    createPurchase,
} from "../controllers/Purchases.js"

const router = express.Router();

router.get('/purchase', getPurchase);
router.post('/purchase', createPurchase);




export default router;