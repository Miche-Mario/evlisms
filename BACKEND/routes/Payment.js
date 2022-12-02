import express from 'express'
import {
  getPayment,
  getPaymentById
} from "../controllers/Payment.js"

const router = express.Router();

router.get('/payment', getPayment);
router.get('/paymentbyid/:id', getPaymentById);







export default router;