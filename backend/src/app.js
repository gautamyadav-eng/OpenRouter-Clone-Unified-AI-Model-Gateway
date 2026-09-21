import express from "express";
import chatRoutes from "./routes/chatRoutes.js";
import modelRoutes from "./routes/modelRoutes.js";
import apiKeyRoutes from "./routes/apiKeyRoutes.js";

const app = express();

app.use(express.json());
app.use("/api/chat", chatRoutes);
app.use("/api/models", modelRoutes);
app.use("/api/keys", apiKeyRoutes);

app.get("/", (req, res) => {
    res.send("Open router backend is runing");
})

export default app;