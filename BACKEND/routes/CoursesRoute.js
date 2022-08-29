import express from 'express'
import {
    getCourses,
    createCourses,
    getCoursesById,
    deleteCourses
} from "../controllers/Courses.js"

const router = express.Router();

router.get('/courses', getCourses);
router.delete('/courses/:id', deleteCourses);
router.post('/courses', createCourses);
router.get('/courses/:id', getCoursesById);





export default router;