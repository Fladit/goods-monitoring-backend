import {ValueOf} from "../../../types/ValueOf";
import {DIMENSIONS} from "./dimension";

export interface IProductType {
    id: string;
    name: string;
    dimension: ValueOf<DIMENSIONS>;
}

export interface IProductTypeCreation extends Omit<IProductType, 'id'>{
}