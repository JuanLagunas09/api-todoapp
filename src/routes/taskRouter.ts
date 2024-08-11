import express from 'express';
import * as taskController from '../controllers/taskController';
const router = express.Router();

router.post('/', taskController.store);

export default router;