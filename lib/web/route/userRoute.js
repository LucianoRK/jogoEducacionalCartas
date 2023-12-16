"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var userController_1 = __importDefault(require("../controller/userController"));
var router = express_1.default.Router();
router.get('/user', function (req, res) {
    userController_1.default.index(req, res);
});
router.get('/user/:id', function (req, res) {
    userController_1.default.show(req, res);
});
router.post('/user', function (req, res) {
    userController_1.default.store(req, res);
});
router.put('/user/:id', function (req, res) {
    userController_1.default.update(req, res);
});
router.delete('/user/:id', function (req, res) {
    userController_1.default.delete(req, res);
});
exports.default = router;
