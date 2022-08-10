import express from 'express'
import {
    getTime,
    createTime
} from "../controllers/Times.js"

const router = express.Router();

router.get('/time', getTime);
router.post('/time', createTime);




export default router;