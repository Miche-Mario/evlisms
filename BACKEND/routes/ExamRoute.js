import express from 'express'
import {
    getExams,
    getExamById,
    getExamPrice,
    updateExam,
    deleteExam,
    createExam,
} from "../controllers/Exams.js"

const router = express.Router();

router.get('/exam', getExams);
router.post('/examprice', getExamPrice)
router.get('/exam/:id', getExamById);
router.patch('/exam/:id', updateExam);
router.delete('/exam/:id', deleteExam);
router.post('/exam', createExam);




export default router;