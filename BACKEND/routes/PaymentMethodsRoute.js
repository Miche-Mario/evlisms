import express from 'express'
import {
    getPaymentMethods,
    createPaymentMethods,
    getPaymentMethodsById,
    deletePaymentMethods,
    updatePaymentMethods
} from "../controllers/PaymentMethods.js"

const router = express.Router();

router.get('/paymentmethod', getPaymentMethods);
router.post('/paymentmethod', createPaymentMethods);
router.get('/paymentmethod/:id', getPaymentMethodsById);
router.delete('/paymentmethod/:id', deletePaymentMethods);
router.patch('/paymentmethod/:id', updatePaymentMethods);




export default router;