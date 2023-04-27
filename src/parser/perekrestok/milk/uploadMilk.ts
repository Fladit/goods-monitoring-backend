import {MILK_CATEGORIES_TRANSIT} from "./categories";
import {CATEGORY_NAMES} from "../../../database/models/Category/categoryNames";
import {DIMENSION_NAMES} from "../../../database/models/ProductDimension/dimension";
import {MILK_PRODUCTS} from "../../../database/models/Product/productNames";
import {uploadProduct} from "../uploadProduct";

const milkUrl = 'https://www.perekrestok.ru/cat/c/114/moloko?orderBy=price&orderDirection=asc'
const milkRequestUrl = 'catalog/product/grouped-feed';

export const uploadMilk = () => {
    return uploadProduct(
        {
        productUrl: milkUrl,
        searchedRequestUrl: milkRequestUrl,
        productGroupNames: MILK_CATEGORIES_TRANSIT,
        productNames: MILK_PRODUCTS,
        categoryName: CATEGORY_NAMES.MILK,
        dimensionName: DIMENSION_NAMES.VOLUME
        })
}