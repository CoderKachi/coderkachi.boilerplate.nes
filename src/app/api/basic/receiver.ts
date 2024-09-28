import express, { Request, Response } from "express"

const router = express.Router()

router.get("/", (req: Request, res: Response) => 
{
    const queryParam = req.query.query
    console.log("Query received:", queryParam)
    res.json({ message: "Query Received!", query: queryParam })
})

router.get("/reverse", (req: Request, res: Response) => 
{
    const queryParam = req.query.query;

    if (typeof queryParam === "string") {
        const reversedQuery = queryParam.split("").reverse().join("");
        console.log("Reversed Query:", reversedQuery);
        res.json({ original: queryParam, reversed: reversedQuery });
    } 
    else 
    {
        res.status(400).json({ error: "Please provide a valid query parameter as a string." });
    }
});

export default router 
