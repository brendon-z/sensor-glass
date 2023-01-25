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

export { getEmptyDataStore, getData, setData, datastore };