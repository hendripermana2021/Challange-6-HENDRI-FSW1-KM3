import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import db from "./config/Database.js";
import router from "./routes/index.js";
dotenv.config();
const app = express();
import bodyParser from "body-parser";

 
app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(router);
app.use(bodyParser.urlencoded({ extended: true }));


 
app.listen(8000, ()=> console.log('Server running at port 8000'));