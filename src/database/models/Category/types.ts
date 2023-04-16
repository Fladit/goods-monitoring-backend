import {ValueOf} from "../../../types/ValueOf";
import {CATEGORY_NAMES} from "./categoryNames";

export interface ICategory {
    id: number;
    name: ValueOf<typeof CATEGORY_NAMES>;
}

export interface ICategoryCreation extends Omit<ICategory, 'id'>{
}