import express from 'express'
import {
  getInvoice,
  createInvoice
} from "../controllers/Invoice.js"

const router = express.Router();

router.post('/getinvoice', getInvoice);
router.post('/invoice', createInvoice);





export default router;