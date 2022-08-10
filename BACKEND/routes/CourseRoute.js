import express from 'express'
import {
    getCourse,
    createCourse
} from "../controllers/Course.js"

const router = express.Router();

router.get('/course', getCourse);
router.post('/course', createCourse);




export default router;