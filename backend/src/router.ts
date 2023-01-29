import express, { json, Request, Response } from 'express';

import { addFormat, getInfo } from './routes';
import { getData } from './datastore';

const router = express.Router();

router.get('/', (req: Request, res: Response) => {
    res.json("Hello world, welcome to the server root 😉");
});

router.get('/format/view/:id', (req: Request, res: Response) => {
    const formatId = req.params.id as string;
    res.json(getInfo(parseInt(formatId)));
});

router.post('/format/add', (req: Request, res: Response) => {
    const { name, width, height } = req.body;
    res.json(addFormat(name, width, height));
    console.log(getData().formats);
});

export { router };