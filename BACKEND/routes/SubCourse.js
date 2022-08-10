import express from 'express'
import {
    getSubCourse,
    createSubCourse
} from "../controllers/SubCourse.js"

const router = express.Router();

router.get('/subcourse', getSubCourse);
router.post('/subcourse', createSubCourse);




export default router;