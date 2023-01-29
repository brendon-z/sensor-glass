import { dimensions, aspectRatio } from "./types/generalTypes";
import { fullFrameDiagonal } from "./types/referenceValues";

import fracCalc from 'fraction-calculator';

class Format {
    id: number;
    name: string;
    dimensions: dimensions;
    _area: number;
    _aspectRatio: number;
    _cropFactor: number;

    constructor(name: string, dimensions: dimensions) {
        this.name = name;
        this.dimensions = dimensions;
    }

    get area(): number {
        return this.dimensions.height * this.dimensions.width;
    }

    get aspectRatio(): aspectRatio {
        let fraction: string = fracCalc(this.dimensions.width / this.dimensions.height).toFraction();
        return { horizontalAspect: parseInt(fraction.split('/')[0]), verticalAspect: parseInt(fraction.split('/')[1]) };
    }

    get cropFactor(): number {
        return fullFrameDiagonal / this.dimensions.diagonalSize;
    }
}

export { Format };