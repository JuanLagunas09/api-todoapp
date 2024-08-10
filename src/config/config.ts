import "dotenv/config";

export const config = {
  PORT: process.env.PORT ?? 3001,
  DB_URI: process.env.DB_URI,
}