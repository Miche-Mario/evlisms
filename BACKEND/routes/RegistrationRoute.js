import express from 'express'
import {
    getRegistration,
    createRegistration,
    updateRegistration,
    deleteRegistration
} from "../controllers/Registration.js"

const router = express.Router();

router.get('/registration', getRegistration);
router.patch('/registration/:id', updateRegistration);
router.delete('/registration/:id', deleteRegistration);
router.post('/registration', createRegistration);




export default router;