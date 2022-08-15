import express from 'express'
import {
    getStudentsCourses,
    createStudentsCourses
} from "../controllers/StudentsCourses.js"

const router = express.Router();

router.get('/studentscourses', getStudentsCourses);
router.post('/studentscourses', createStudentsCourses);





export default router;