import {ValueOf} from "../../../types/ValueOf";
import {CATEGORY_NAMES} from "../Category/categoryNames";
import {DIMENSION_NAMES} from "../ProductDimension/dimension";

export const MILK_PRODUCTS =  {
    PASTERIZOVANNOE: 'Пастеризованное',
    ULTRAPASTERIZOVANNOE: 'Ультрапастеризованное',
    TOPLENOE: 'Топленое',
    STERILIZOVANNOE: 'Стерилизованное'
} as const;

export const VEGETABLE_PRODUCTS = {
    TOMATOES: 'Помидоры',
    CUCUMBERS: 'Огурцы',
    PEPPER: 'Перец',
    POTATO: 'Картофель',
    CARROT: 'Морковь',
    ONION: 'Лук',
    BEET: 'Свекла'
} as const;

export type TProductNamesRecord = typeof MILK_PRODUCTS | typeof VEGETABLE_PRODUCTS

export interface IProductsByCategory {
    [CATEGORY_NAMES.MILK]: ValueOf<typeof MILK_PRODUCTS>;
    [CATEGORY_NAMES.VEGETABLES]: ValueOf<typeof VEGETABLE_PRODUCTS>;
}

export interface IDimensionByCategory {
    [CATEGORY_NAMES.MILK]: typeof DIMENSION_NAMES['VOLUME'];
    [CATEGORY_NAMES.VEGETABLES]: typeof DIMENSION_NAMES['WEIGHT'];
}

export type TProductsNames = ValueOf<IProductsByCategory>
export type TProductGroupNames = Record<string, TProductsNames>;