import express from 'express'
import {
    getTestPreparationPrice,
    createTestPreparationPrice
} from "../controllers/TestPreparationPrice.js"

const router = express.Router();

router.get('/testpreparationprice', getTestPreparationPrice);
router.post('/testpreparationprice', createTestPreparationPrice);




export default router;