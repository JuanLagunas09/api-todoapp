"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const diaries_1 = __importDefault(require("./routes/diaries"));
const config_1 = require("./config/config");
// se define el puerto
const PORT = config_1.config.PORT;
// se inicializa express
const app = (0, express_1.default)();
app.use(express_1.default.json());
// se define la ruta principal
const router = express_1.default.Router();
app.use("api/v1/", router);
app.get("/api/v1", (_, res) => {
    res.send("Hello World!");
});
router.use("/api/diaries", diaries_1.default);
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
