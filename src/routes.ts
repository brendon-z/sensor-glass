import { datastore, getData, getEmptyDataStore, getFormatWithId, setData } from './datastore';
import { Format } from './format';

function getInfo(formatId: number) {
    const format: Format = getFormatWithId(formatId);

    if (format === undefined) {
        return { error: `Unknown format id ${formatId}!`};
    }

    return { format: format };
}

export { getInfo };