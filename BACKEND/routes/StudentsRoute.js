import express from 'express'
import {
    getStudents,
    getStudentById,
    createStudent,
    updateStudent,
    deleteStudent,
    getStudentByName,
    getStudentByPassportId,
    getStudentByStudentId,
    upload
} from "../controllers/Students.js"
const router = express.Router();

router.get('/students', getStudents);
router.post('/studentbyname', getStudentByName);
router.post('/studentbypassportid', getStudentByPassportId);
router.get('/students/:id', getStudentById);
router.post('/students', createStudent);
router.post('/studentbystudentid', getStudentByStudentId);
router.patch('/students/:id', upload, updateStudent);
router.delete('/students/:id', deleteStudent);



export default router;