import { datastore, getData, setData } from './datastore';

import fs from 'fs';

// Temporary testing
loadJSON("data/data.json");
readout();

function loadJSON(filename: string) {
    if (fs.existsSync(filename)) {
        const contents = JSON.parse(fs.readFileSync(filename).toString()) as datastore;
        setData(contents);
    }
}

function readout() {
    let data = getData() as datastore;
    if (data !== null) {
        console.log(data);
    }
}