import express, { json, Request, Response } from 'express';

import { getInfo } from './routes';

const router = express.Router();

router.get('/', (req: Request, res: Response) => {
    res.json("Hello world, welcome to the server root 😉");
});

router.get('/format/view/:id', (req: Request, res: Response) => {
    const formatId = req.params.id as string;
    console.log(formatId);
    res.json(getInfo(parseInt(formatId)));
});

export { router };