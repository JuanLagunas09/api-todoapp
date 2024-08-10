import express from 'express';
import * as userController from '../controllers/userController';
const router = express.Router();

router.get('/', (_, res) => {
    res.send('Hello user!');
});

router.post('/', userController.store);

export default router;