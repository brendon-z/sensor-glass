import { createNewFormat } from './api';
import { datastore, getData, getEmptyDataStore, getFormatWithId, setData } from './datastore';
import { Format } from './format';
import { dimensions } from './types/generalTypes';

function getInfo(formatId: number) {
    const format: Format = getFormatWithId(formatId);

    if (format === undefined) {
        return { error: `Unknown format id ${formatId}!`};
    }

    return { 
            name: format.name,
            width: format.dimensions.width,
            height: format.dimensions.height,
            diagonal: format.dimensions.diagonalSize,
            area: format.area,
            aspectRatio: `${format.aspectRatio.horizontalAspect} : ${format.aspectRatio.verticalAspect}`,
            cropFactor: format.cropFactor
            };
}

function addFormat(name: string, width: number, height: number) {
    let dimensions: dimensions = {width: width, height: height, diagonalSize: Math.round(Math.sqrt(Math.pow(width, 2) + Math.pow(height, 2)) * 10) / 10 };
    createNewFormat(name, dimensions);
}

export { getInfo, addFormat };