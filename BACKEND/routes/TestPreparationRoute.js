import express from 'express'
import {
    getTestPreparation,
    createTestPreparation
} from "../controllers/TestPreparation.js"

const router = express.Router();

router.get('/testpreparation', getTestPreparation);
router.post('/testpreparation', createTestPreparation);




export default router;