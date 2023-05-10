import {getProduct} from "./getProduct";
import {ValueOf} from "../../types/ValueOf";
import {
    IProductsByCategory,
    TProductGroupNames,
    TProductNamesRecord,
} from "../../database/models/Product/productNames";
import {ProductService} from "../../services/ProductService";
import {TDimensionNames} from "../../database/models/ProductDimension/dimension";

interface IUploadProductProps {
    productUrl: string;
    searchedRequestUrl: string;
    productGroupNames: TProductGroupNames;
    productNames: TProductNamesRecord;
    categoryName: keyof IProductsByCategory;
    dimensionName: TDimensionNames;
}


export const uploadProduct = async ({productUrl, searchedRequestUrl, productGroupNames, productNames, categoryName, dimensionName}: IUploadProductProps) => {
    const productGroups = await getProduct({
        productUrl,
        searchedRequestUrl,
        productGroupNames,
    });

    return Promise.all(productGroups.map(({name, minPrice, mediumPrice, maxPrice}) => {
        const productName = name as ValueOf<typeof productNames>;

        if (!Object.values(productNames).includes(productName)) {
            return Promise.reject(`${productName} not a part of ${categoryName}`);
        }

        return ProductService.addProduct({
                categoryName,
                dimensionName,
                name: productName,
                minPrice,
                mediumPrice,
                maxPrice,
            }
        )
    }));
}