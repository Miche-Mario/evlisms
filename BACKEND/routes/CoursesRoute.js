import express from 'express'
import {
    getCourses,
    createCourses,
    getCoursesById,
    deleteCourses,
    getCourseWithSubcourse,
    getCoursesPrice
} from "../controllers/Courses.js"

const router = express.Router();

router.post('/getcourses', getCourses);
router.post('/getsubcourse', getCourseWithSubcourse);
router.post('/getcoursesprice', getCoursesPrice);
router.delete('/courses/:id', deleteCourses);
router.post('/courses', createCourses);
router.get('/courses/:id', getCoursesById);





export default router;