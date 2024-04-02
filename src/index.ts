import express, { Request, Response } from 'express';

const app = express();
const PORT = 3000;

app.get('/', async (req: Request, res: Response) => {
 res.send("hi")
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
