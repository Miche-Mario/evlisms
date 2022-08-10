import express from 'express'
import {
    getAccomodation,
    createAccomodation
} from "../controllers/Accomodations.js"

const router = express.Router();

router.get('/accomodation', getAccomodation);
router.post('/accomodation', createAccomodation);




export default router;