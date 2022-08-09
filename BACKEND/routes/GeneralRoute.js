import express from 'express'
import {
    getGeneral,
    createGeneral
} from "../controllers/General.js"

const router = express.Router();

router.get('/general', getGeneral);
router.post('/general', createGeneral);




export default router;