import {VEGETABLE_PRODUCTS} from "../../../database/models/Product/productNames";
import {CATEGORY_NAMES} from "../../../database/models/Category/categoryNames";
import {DIMENSION_NAMES} from "../../../database/models/ProductDimension/dimension";
import {VEGETABLE_CATEGORIES_TRANSIT} from "./categories";
import {uploadProduct} from "../uploadProduct";

const vegetableUrl = 'https://www.perekrestok.ru/cat/c/150/ovosi?orderBy=price&orderDirection=asc#kabachki-baklajany-vegetables'
const vegetableRequestUrl = 'catalog/product/grouped-feed';

export const uploadVegetables = () => {
    return uploadProduct({productUrl: vegetableUrl,
        searchedRequestUrl: vegetableRequestUrl,
        productGroupNames: VEGETABLE_CATEGORIES_TRANSIT, productNames: VEGETABLE_PRODUCTS, categoryName: CATEGORY_NAMES.VEGETABLES, dimensionName: DIMENSION_NAMES.WEIGHT})
}