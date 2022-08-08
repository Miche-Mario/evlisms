import express from 'express'
import {
    getStudents,
    getStudentById,
    createStudent,
    updateStudent,
    deleteStudent,
    upload
} from "../controllers/Students.js"

const router = express.Router();

router.get('/students', getStudents);
router.get('/students/:id', getStudentById);
router.post('/students',upload, createStudent);
router.patch('/students/:id', updateStudent);
router.delete('/students/:id', deleteStudent);



export default router;