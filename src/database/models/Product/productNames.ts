import {ValueOf} from "../../../types/ValueOf";
import {CATEGORY_NAMES} from "../Category/categoryNames";
import {DIMENSION_NAMES} from "../ProductDimension/dimension";

export const MILK_PRODUCTS =  {
    PASTERIZOVANNOE: 'Пастеризованное',
    ULTRAPASTERIZOVANNOE: 'Ультрапастеризованное',
    TOPLENOE: 'Топленое',
    STERILIZOVANNOE: 'Стерилизованное'
} as const;

export type TProductsNames = ValueOf<typeof MILK_PRODUCTS>

export interface IProductsByCategory {
    [CATEGORY_NAMES.MILK]: ValueOf<typeof MILK_PRODUCTS>;
}

export interface IDimensionByCategory {
    [CATEGORY_NAMES.MILK]: typeof DIMENSION_NAMES['VOLUME'];
}