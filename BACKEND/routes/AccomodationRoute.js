import express from 'express'
import {
    getAccomodations,
    getAccomodationPrice,
    createAccomodation,
    updateAccomodation,
    deleteAccomodation,
    getAccomodationById
} from "../controllers/Accomodations.js"

const router = express.Router();

router.get('/accomodations', getAccomodations);
router.post('/accomodationprice', getAccomodationPrice);
router.get('/accomodation/:id', getAccomodationById);
router.patch('/accomodation/:id', updateAccomodation);
router.delete('/accomodation/:id', deleteAccomodation);
router.post('/accomodation', createAccomodation);




export default router;