import express from 'express'
import {
    getTime,
    createTime
} from "../controllers/Times.js"

const router = express.Router();

router.post('/time', getTime);
router.post('/timee', createTime);




export default router;