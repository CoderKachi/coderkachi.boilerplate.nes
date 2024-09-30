import express, { Request, Response } from "express";

const app = express();
const PORT = Number(process.env.PORT) || 3000;
const HOST = process.env.HOST || "localhost";

// Routes
import nullRoute from "./api/basic/none"
import basicRoutes from "./api/basic/giver"
import receiverRoutes from "./api/basic/receiver"

app.use(express.json());
app
    .use("/", nullRoute)
    .use("/api/basic/giver", basicRoutes)
    .use("/api/basic/receiver", receiverRoutes);

app.listen(PORT, HOST, () => 
{
    console.log(`Server running on http://${HOST}:${PORT}`);
});