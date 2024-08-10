import express from 'express';
import * as userController from '../controllers/userController';
const router = express.Router();

router.post('/', userController.store);
router.get('/:id', userController.show);
router.get('/', userController.index);
router.patch('/:id', userController.update);
router.delete('/:id', userController.destroy);

export default router;