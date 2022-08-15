import express from 'express'
import {
    getClassType,
    createClassType
} from "../controllers/ClassTypes.js"

const router = express.Router();

router.get('/classtype', getClassType);
router.post('/classtype', createClassType);




export default router;