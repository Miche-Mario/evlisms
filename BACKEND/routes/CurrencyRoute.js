import express from 'express'
import {
  getCuurency,
  createCurency,
  deleteCurrency,
  getCurrencyById,
  updateCurrency
} from "../controllers/Currency.js"

const router = express.Router();

router.get('/currency', getCuurency);
router.get('/currency/:id', getCurrencyById);
router.post('/currency', createCurency);
router.patch('/currency/:id', updateCurrency);
router.delete('/currency/:id', deleteCurrency);







export default router;