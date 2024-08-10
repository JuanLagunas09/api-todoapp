"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
require("dotenv/config");
exports.config = {
    PORT: (_a = process.env.PORT) !== null && _a !== void 0 ? _a : 3001,
    DB_URI: process.env.DB_URI,
};
