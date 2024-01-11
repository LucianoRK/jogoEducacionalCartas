import express from 'express';
import userController from '../controller/userController';

const router = express.Router();

router.get('/user', userController.list);
router.get('/user/:id', userController.show);
router.post('/user', userController.create);
router.put('/user/:id', userController.update);
router.delete('/user/:id', userController.delete);

export default router