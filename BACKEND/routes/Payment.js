import express from 'express'
import {
  getPayment
} from "../controllers/Payment.js"

const router = express.Router();

router.get('/payment', getPayment);





export default router;