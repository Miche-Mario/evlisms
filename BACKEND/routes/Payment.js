import express from 'express'
import {
  getPayment,
  getPaymentById,
  updatePayment,
  createPayment
} from "../controllers/Payment.js"

const router = express.Router();

router.get('/payment', getPayment);
router.post('/createpayment', createPayment)
router.get('/paymentbyid/:id', getPaymentById);
router.patch('/payment/:id', updatePayment);








export default router;