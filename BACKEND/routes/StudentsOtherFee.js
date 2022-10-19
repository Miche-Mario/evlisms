import express from 'express'
import {
  getStudentsOtherFee
} from "../controllers/StudentsOtherFee.js"

const router = express.Router();

router.get('/studentotherfee', getStudentsOtherFee);





export default router;