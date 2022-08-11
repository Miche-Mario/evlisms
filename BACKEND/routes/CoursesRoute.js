import express from 'express'
import {
    getCourses,
    createCourses,
    getSubCourses
} from "../controllers/Courses.js"

const router = express.Router();

router.get('/courses', getCourses);
router.post('/courses', createCourses);
router.get('/subcourses/:id', getSubCourses);





export default router;