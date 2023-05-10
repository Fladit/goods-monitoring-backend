import {ValueOf} from "../../../types/ValueOf";

export const CATEGORY_NAMES = {
    MILK: 'Молочные продукты',
    BREAD: 'Хлеб',
    VEGETABLES: 'Овощи',
} as const;

export const CATEGORY_NAMES_FROM_QUERY = {
    milk: CATEGORY_NAMES.MILK,
    bread: CATEGORY_NAMES.BREAD,
    vegetables: CATEGORY_NAMES.VEGETABLES,
} as const;


export type TCategoryNames = ValueOf<typeof CATEGORY_NAMES>;