import { dimensions, aspectRatio } from "./types/generalTypes";
import gcdCalc from 'compute-gcd';

class Format {
    name : string;
    dimensions : dimensions;
    cropFactor : number;
    _area : number;
    _aspectRatio : number;

    constructor(name : string, dimensions : dimensions, cropFactor : number) {
        this.name = name;
        this.dimensions = dimensions;
        this.cropFactor = cropFactor;
    }

    get area() : number {
        return this.dimensions.height * this.dimensions.width;
    }

    get aspectRatio() : aspectRatio {
        let gcd : number = gcdCalc(this.dimensions.width, this.dimensions.height);
        return { horizontalAspect : this.dimensions.width / gcd, verticalAspect : this.dimensions.height / gcd };
    }
}
