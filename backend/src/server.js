import dotenv from "dotenv";
import {setServers} from "node:dns";
import  app from "./app.js"
import  connectDB from "./config/db.js";

dotenv.config();
setServers(["8.8.8.8", "1.1.1.1"]);

const PORT = process.env.PORT || 3000;

const startServer = async () => {
    await connectDB();
}

app.listen(PORT, () => {
    console.log(`sever is runing on port ${PORT}`);
});

startServer();