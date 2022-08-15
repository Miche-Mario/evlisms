import express from 'express'
import {
    getStudentsPurchases,
    createStudentsPurchases
} from "../controllers/StudentsPurchases.js"

const router = express.Router();

router.get('/studentspurchases', getStudentsPurchases);
router.post('/studentspurchases', createStudentsPurchases);




export default router;