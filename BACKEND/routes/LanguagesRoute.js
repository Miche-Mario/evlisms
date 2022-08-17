import express from 'express'
import {
    getLanguage,
    createLanguage,
    getLanguageById,
    deleteLanguage,
    updateLanguage
} from "../controllers/Languages.js"

const router = express.Router();

router.get('/language', getLanguage);
router.post('/language', createLanguage);
router.get('/language/:id', getLanguageById);
router.delete('/language/:id', deleteLanguage);
router.patch('/language/:id', updateLanguage);




export default router;