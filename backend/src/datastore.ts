import { Format } from "./format";

interface datastore {
    formats: Format[];
}

let data: datastore = getEmptyDataStore();

function getEmptyDataStore(): datastore {
    return {
        formats: []
    };
}

function getData(): datastore {
    return data;
}

function setData(newData: datastore) {
    data = newData;
}

function getFormatWithId(id: number) {
    return data.formats.find(x => x.id === id);
}

function addFormat(newFormat: Format) {
    newFormat.id = data.formats.length;
    data.formats.push(newFormat);
}

export { getEmptyDataStore, getData, setData, getFormatWithId, addFormat, datastore };