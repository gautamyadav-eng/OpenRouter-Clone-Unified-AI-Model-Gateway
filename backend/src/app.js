import express from "express";
import cors from "cors"
import cookieParser from "cookie-parser";
import chatRoutes from "./routes/chatRoutes.js";
import modelRoutes from "./routes/modelRoutes.js";
import apiKeyRoutes from "./routes/apiKeyRoutes.js";
import authRoutes from "./routes/authRoutes.js"

const app = express();
app.use(cors({
    origin:["http://localhost:5173","http://localhost:5174"],
    credentials: true,
 })
);

app.use(express.json());
app.use(cookieParser());
app.use("/api/chat", chatRoutes);
app.use("/api/models", modelRoutes);
app.use("/api/keys", apiKeyRoutes);
app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
    res.send("Open router backend is runing");
})

export default app;