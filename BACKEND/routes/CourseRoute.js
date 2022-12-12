import express from 'express'
import {
    getCourse,
    createCourse,
    getCourseList
} from "../controllers/Course.js"

const router = express.Router();

router.get('/course', getCourse);
router.get('/courselist', getCourseList);

router.post('/course', createCourse);




export default router;