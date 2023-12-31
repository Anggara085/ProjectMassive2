import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import db from "./config/Database1.js";
import router from "./routes/index.js";
import FileUpload from "express-fileupload";
import ProfilRoute from "./routes/ProfilRoute.js";

dotenv.config();
const app = express();

try {
  await db.authenticate();
  console.log("Database Connected...");
} catch (error) {
  console.error(error);
}

app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(FileUpload());
app.use(cookieParser());
app.use(express.json());
app.use(ProfilRoute);
app.use(router);

app.listen(5000, () => console.log("Server running at port 5000"));
