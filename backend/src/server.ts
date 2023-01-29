import express, { json, Request, Response } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import { PORT, SERVER_URL } from '../config';

import { loadJSON } from './api';
import { router } from './router';

const app = express();
app.use(cors());
app.use(json());
app.use(morgan('dev'));

// Starting the server
loadJSON("data/data.json");

app.use('/', router);

app.listen(parseInt(process.env.PORT || String(PORT)), process.env.IP, () => {
    console.log(`Starting Express Server at the URL: '${SERVER_URL}'`);
    console.log(`⚡️ Server listening on port ${process.env.PORT || String(PORT)}`);
});