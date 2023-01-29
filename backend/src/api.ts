import { addFormat, datastore, getData, getEmptyDataStore, setData } from './datastore';

import fs from 'fs';
import { Format } from './format';
import { dimensions } from './types/generalTypes';

// Temporary testing
loadJSON("data/data.json");

function loadJSON(filename: string) {
    if (fs.existsSync(filename)) {
        const contents = JSON.parse(fs.readFileSync(filename).toString()) as datastore;
        contents.formats.forEach(content => createNewFormat(content.name, content.dimensions));
    }
}

function readout() {
    let data = getData() as datastore;
    if (data !== null) {
        console.log(data);
        console.log(data.formats.find(x => x.name === "35 mm full frame").area);
    }
}

function createNewFormat(name: string, dimensions: dimensions) {
    let newFormat: Format = new Format(name, dimensions);
    addFormat(newFormat);
}

export { loadJSON, readout, createNewFormat };