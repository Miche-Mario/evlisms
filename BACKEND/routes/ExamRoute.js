import express from 'express'
import {
    getExam,
    createExam,
} from "../controllers/Exams.js"

const router = express.Router();

router.get('/exam', getExam);
router.post('/exam', createExam);




export default router;