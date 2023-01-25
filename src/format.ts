import { dimensions, aspectRatio } from "./types/generalTypes";
import { fullFrameDiagonal } from "./types/referenceValues";

import gcdCalc from 'compute-gcd';

class Format {
    id: number;
    name: string;
    dimensions: dimensions;
    _area: number;
    _aspectRatio: number;
    _cropFactor: number;

    constructor(id: number, name: string, dimensions: dimensions) {
        this.id = id;
        this.name = name;
        this.dimensions = dimensions;
    }

    get area(): number {
        return this.dimensions.height * this.dimensions.width;
    }

    get aspectRatio(): aspectRatio {
        let gcd: number = gcdCalc(this.dimensions.width, this.dimensions.height);
        return { horizontalAspect: this.dimensions.width / gcd, verticalAspect: this.dimensions.height / gcd };
    }

    get cropFactor(): number {
        return fullFrameDiagonal / this.dimensions.diagonalSize;
    }
}

export { Format };