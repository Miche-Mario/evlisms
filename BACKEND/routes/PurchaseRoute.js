import express from 'express'
import {
    getPurchases,
    getPurchaseById,
    createPurchase,
    updatePurchase,
    deletePurchase
} from "../controllers/Purchases.js"

const router = express.Router();

router.get('/purchases', getPurchases);
router.get('/purchase/:id', getPurchaseById);
router.post('/purchase', createPurchase);
router.patch('/purchase/:id', updatePurchase);
router.delete('/purchase/:id', deletePurchase);





export default router;