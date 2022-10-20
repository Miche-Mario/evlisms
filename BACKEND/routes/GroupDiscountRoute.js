import express from 'express'
import {
  getGroupDiscount,
  createGroupDiscount,
  getDiscountGroupById,
  updateDiscountGroup
} from "../controllers/GroupDiscount.js"

const router = express.Router();

router.get('/groupdiscount', getGroupDiscount);
router.post('/groupdiscount', createGroupDiscount);
router.get('/groupdiscount/:id', getDiscountGroupById);
router.patch('/groupdiscount/:id', updateDiscountGroup);







export default router;