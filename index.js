import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import Connection from "./Database/db.js";
import userRouter from "./Routes/userRouter.js";
import listRouter from "./Routes/listRoutes.js";
import path from "path";
import { fileURLToPath } from 'url';

const app = express();

// Simulate __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();
const port = process.env.PORT;
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;


app.get("/", (req, res) => {
    app.use(express.static(path.resolve(__dirname, "client", "dist")));
    res.sendFile(path.resolve(__dirname, "client", "dist", "index.html"));
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/", userRouter);
app.use("/", listRouter);

Connection({ username, password });

app.listen(port, () => {
  console.log(`Server is running at port ${port}`);
});
