import express from 'express'
import {
    getProspects,
    getProspectById,
    createProspect,
    updateProspect,
    deleteProspect,
    upload,
    getProspectByProspectId,
    getProspectByPassportId
} from "../controllers/Prospects.js"

const router = express.Router();

router.get('/prospects', getProspects);
router.post('/prospectbyid', getProspectByProspectId);
router.get('/prospects/:id', getProspectById);
router.post('/prospects',upload, createProspect);
router.patch('/prospects/:id', updateProspect);
router.delete('/prospects/:id', deleteProspect);



export default router;