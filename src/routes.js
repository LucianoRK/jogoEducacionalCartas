const express = require("express");
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Hello World routes')
});

// //Usuário
// routes.get('/users', UserController.index);
// routes.get('/users/:id', UserController.show);
// routes.post('/users', UserController.store);
// routes.put('/users/:id', UserController.update);
// routes.delete('/users/:id', UserController.delete);

module.exports = router;