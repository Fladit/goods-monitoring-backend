import {ValueOf} from "../../../types/ValueOf";

export const CATEGORY_NAMES = {
    MILK: 'Молочные продукты',
    BREAD: 'Хлеб',
    VEGETABLES: 'Овощи',
} as const;

export type TCategoryNames = ValueOf<typeof CATEGORY_NAMES>;