import express, { Request, Response } from "express"

const router = express.Router()

interface Person
{
    firstname: string
    surname: string
    age: number
}

router.get("/1", (req: Request, res: Response) => 
{
    res.json({ message: "Hello World!" })
})

router.get("/2", (req: Request, res: Response) => 
{
    let testPerson: Person =
    {
        firstname: "Bobby",
        surname: "Shmurda",
        age: 1337
    }

    res.json(testPerson)
});

router.get("/3", (req: Request, res: Response) => 
    {
        res.json({ location: "Earth"})
    })

export default router
