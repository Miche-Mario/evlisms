import express from 'express'
import {
    getStudentsCourses,
    getProgram
} from "../controllers/StudentsCourses.js"

const router = express.Router();

router.get('/studentscourses', getStudentsCourses);
router.get('/getprogram/:id', getProgram);





export default router;