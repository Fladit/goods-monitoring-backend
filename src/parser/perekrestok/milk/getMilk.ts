import {MILK_CATEGORIES_TRANSIT} from "./categories";
import {getProduct} from "../getProduct";
import ProductService from "../../../services/ProductService";
import {CATEGORY_NAMES} from "../../../database/models/Category/categoryNames";
import {DIMENSION_NAMES} from "../../../database/models/ProductDimension/dimension";

const milkUrl = 'https://www.perekrestok.ru/cat/c/114/moloko?orderBy=price&orderDirection=asc'
const milkRequestUrl = 'catalog/product/grouped-feed';

export const getMilk = async () => {
    const milkGroups = await getProduct({
        productUrl: milkUrl,
        searchedRequestUrl: milkRequestUrl,
        productGroupNames: MILK_CATEGORIES_TRANSIT,
    });

    return Promise.all(milkGroups.map(({name, medianPriceItem: {value, price}}) => {
        return ProductService.addProduct({
            categoryName: CATEGORY_NAMES.MILK,
            dimensionName: DIMENSION_NAMES.VOLUME,
            name,
            value,
            price, }
        )
    }));
}