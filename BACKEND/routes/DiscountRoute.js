import express from 'express'
import {
  getDiscount
} from "../controllers/Discount.js"

const router = express.Router();

router.get('/discount', getDiscount);





export default router;