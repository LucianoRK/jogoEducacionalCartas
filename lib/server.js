"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var userRoute_1 = __importDefault(require("./web/route/userRoute"));
var server = (function () {
    function server() {
        this.server = (0, express_1.default)();
        this.middleware();
        this.routes();
    }
    server.prototype.middleware = function () {
        this.server.use(express_1.default.json());
    };
    server.prototype.routes = function () {
        this.server.use(userRoute_1.default);
    };
    server.prototype.start = function () {
        this.server.listen(process.env.SERVER_PORT);
    };
    return server;
}());
exports.default = new server();
