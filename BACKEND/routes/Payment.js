import express from 'express'
import {
  getPayment,
  getPaymentById,
  updatePayment,
} from "../controllers/Payment.js"

const router = express.Router();

router.get('/payment', getPayment);
router.get('/paymentbyid/:id', getPaymentById);
router.patch('/payment/:id', updatePayment);








export default router;