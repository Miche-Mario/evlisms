import express from 'express'
import { updateCourses } from '../controllers/Courses.js';
import {
    getPrices,
    createPrices,
    getCoursesPrice
} from "../controllers/Prices.js"

const router = express.Router();

router.get('/prices', getPrices);
router.get('/prices/:id', getCoursesPrice);
router.patch('/coursesprice/:id', updateCourses);
router.post('/coursesprice', getCoursesPrice);
router.post('/prices', createPrices);




export default router;