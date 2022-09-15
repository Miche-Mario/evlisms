import express from 'express'
import {
    getOtherFee,
    getOtherFeePrice,
    createOtherFee,
    updateOtherFee,
    deleteOtherFee,
    getOtherFeeById
} from "../controllers/OtherFee.js"

const router = express.Router();

router.get('/otherfee', getOtherFee);
router.post('/otherfeeprice', getOtherFeePrice);
router.get('/otherfee/:id', getOtherFeeById);
router.patch('/otherfee/:id', updateOtherFee);
router.delete('/otherfee/:id', deleteOtherFee);
router.post('/otherfee', createOtherFee);




export default router;