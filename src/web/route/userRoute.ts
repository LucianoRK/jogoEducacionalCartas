import express from 'express';
import UserController from '../controller/userController';


const router = express.Router();

router.get('/user', (req , res) => {
    UserController.index(req, res);
});

router.get('/user/:id', (req , res) => {
    UserController.show(req, res);
});

router.post('/user', (req , res) => {
    UserController.store(req, res);
});

router.put('/user/:id', (req , res) => {
    UserController.update(req, res);
});

router.delete('/user/:id', (req , res) => {
    UserController.delete(req, res);
});


export default router