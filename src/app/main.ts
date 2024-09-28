import express, { Request, Response } from "express";

const app = express();
const PORT = process.env.PORT || 3000;

// Routes
import nullRoute from "./api/basic/none"
import basicRoutes from "./api/basic/giver"
import receiverRoutes from "./api/basic/receiver"

app.use(express.json());
app
    .use("/", nullRoute)
    .use("/api/basic/giver", basicRoutes)
    .use("/api/basic/receiver", receiverRoutes);

app.listen(PORT, () => 
{
    console.log(`Server running on http://localhost:${PORT}`);
});