import express from 'express'
import {
  getGroupDiscount
} from "../controllers/GroupDiscount.js"

const router = express.Router();

router.get('/groupdiscount', getGroupDiscount);





export default router;