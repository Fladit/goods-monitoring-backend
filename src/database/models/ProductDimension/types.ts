import {ValueOf} from "../../../types/ValueOf";
import {DIMENSION_NAMES} from "./dimension";

export interface IProductDimension {
    id: string;
    name: ValueOf<DIMENSION_NAMES>;
}

export interface IProductDimensionCreation extends Omit<IProductDimension, 'id'>{
}