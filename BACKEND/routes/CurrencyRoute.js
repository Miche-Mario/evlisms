import express from 'express'
import {
  getCuurency
} from "../controllers/Currency.js"

const router = express.Router();

router.get('/currency', getCuurency);





export default router;