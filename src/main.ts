import { datastore, getData, getEmptyDataStore, setData } from './datastore';

import fs from 'fs';
import { Format } from './format';

// Temporary testing
loadJSON("data/data.json");
readout();

function loadJSON(filename: string) {
    if (fs.existsSync(filename)) {
        const contents = JSON.parse(fs.readFileSync(filename).toString()) as datastore;
        let data : datastore = getEmptyDataStore();
        contents.formats.forEach(content => data.formats.push(new Format(content.name, content.dimensions)));
        setData(data);
    }
}

function readout() {
    let data = getData() as datastore;
    if (data !== null) {
        console.log(data);
        console.log(data.formats[0].area);
    }
}