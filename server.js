import { app } from "./app.js";
import "dotenv/config"
import { connectDatabase } from "./config/database.js";
import cloudinary from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});
connectDatabase();

app.listen(process.env.PORT, () => {
  console.log("Server is running on port " + process.env.PORT);
});
