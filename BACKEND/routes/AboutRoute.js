import express from 'express'
import {
    getAbouts,
    getAboutById,
    createAbout,
    updateAbout,
    deleteAbout,
} from "../controllers/About.js"

const router = express.Router();

router.get('/abouts', getAbouts);
router.get('/abouts/:id', getAboutById);
router.post('/abouts', createAbout);
router.patch('/abouts/:id', updateAbout);
router.delete('/abouts/:id', deleteAbout);



export default router;