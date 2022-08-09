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
router.get('/about/:id', getAboutById);
router.post('/about', createAbout);
router.patch('/about/:id', updateAbout);
router.delete('/about/:id', deleteAbout);



export default router;