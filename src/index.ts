import express from "express";
import userRouter from "./routes/userRouter";
import { config } from "./config/config";
import { dbConnection } from "./config/db";
import { errorHandler, errorHandlerBoom } from "./middlewares/errorHandler";

// se define el puerto
const PORT = config.PORT;

// se inicializa express
const app = express();
app.use(express.json());

// se define la ruta principal
const router = express.Router();
app.use("/api/v1", router);


router.get("/hello", (_, res) => {
  res.send("Hello World!");
});

router.use("/user", userRouter);

// se maneja los errores
app.use(errorHandlerBoom);
app.use(errorHandler);

app.listen(PORT, async () => {
  await dbConnection();
  console.log(`Server is running on http://localhost:${PORT}`);
});
