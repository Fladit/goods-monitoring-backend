import {ValueOf} from "../../../types/ValueOf";

export const DIMENSION_NAMES = {
    WEIGHT: 'weight',
    VOLUME: 'volume'
} as const;

export type TDimensionNames = ValueOf<typeof DIMENSION_NAMES>;
