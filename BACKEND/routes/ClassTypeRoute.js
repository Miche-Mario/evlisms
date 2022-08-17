import express from 'express'
import {
    getClassType,
    createClassType,
    updateClassType,
    deleteClassType,
    getClassTypeById
} from "../controllers/ClassTypes.js"

const router = express.Router();

router.get('/classtype', getClassType);
router.get('/classtype/:id', getClassTypeById);
router.patch('/classtype/:id', updateClassType);
router.delete('/classtype/:id', deleteClassType);
router.post('/classtype', createClassType);




export default router;