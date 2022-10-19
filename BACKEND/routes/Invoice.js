import express from 'express'
import {
  getInvoice
} from "../controllers/Invoice.js"

const router = express.Router();

router.get('/invoice', getInvoice);





export default router;