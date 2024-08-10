import mongoose from "mongoose";
import { config } from "./config";

export const dbConnection = async () => {
    try {
        const conection = await mongoose.connect(config.DB_URI!);
        console.log("DB connected");
        return conection;
    } catch (error: any) {
        console.log("DB connection failed", error?.message);
        return;
    }
};