import express from 'express'
import {
    getCourses,
    createCourses,
    getCoursesById,
    updateCourses
} from "../controllers/Courses.js"

const router = express.Router();

router.get('/courses', getCourses);
router.patch('/courses/:id', updateCourses);
router.post('/courses', createCourses);
router.get('/courses/:id', getCoursesById);





export default router;