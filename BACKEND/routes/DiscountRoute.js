import express from 'express'
import {
  getDiscount,
  createDiscount,
  deleteDiscount,
  getDiscountByCode
} from "../controllers/Discount.js"

const router = express.Router();

router.get('/discount', getDiscount);
router.post('/discount', createDiscount);
router.post('/discountcode', getDiscountByCode);

router.delete('/discount/:id', deleteDiscount);







export default router;