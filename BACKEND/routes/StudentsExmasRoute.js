import express from 'express'
import {
    getStudentsExams,
    createStudentsExams
} from "../controllers/StudentsExams.js"

const router = express.Router();

router.get('/studentsexams', getStudentsExams);
router.post('/studentsexams', createStudentsExams);




export default router;