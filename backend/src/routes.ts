import { datastore, getData, getEmptyDataStore, getFormatWithId, setData } from './datastore';
import { Format } from './format';

function getInfo(formatId: number) {
    const format: Format = getFormatWithId(formatId);

    if (format === undefined) {
        return { error: `Unknown format id ${formatId}!`};
    }

    return { 
            name: format.name,
            dimensions: format.dimensions,
            area: format.area,
            aspectRatio: format.aspectRatio,
            cropFactor: format.cropFactor
            };
}

export { getInfo };