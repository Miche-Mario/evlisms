import express from 'express'
import {
    getLanguage,
    createLanguage
} from "../controllers/Languages.js"

const router = express.Router();

router.get('/language', getLanguage);
router.post('/language', createLanguage);




export default router;