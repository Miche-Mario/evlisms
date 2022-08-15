import express from 'express'
import {
    getStudentsAccomodations,
    createStudentsAccomodations
} from "../controllers/StudentsAccomodations.js"

const router = express.Router();

router.get('/studentsaccomodations', getStudentsAccomodations);
router.post('/studentsaccomodations', createStudentsAccomodations);




export default router;