import {TProductsNames} from "../../database/models/Product/productNames";
import {PerekrestokResponse, VolumeProduct, WeightProduct} from "./productType";
import {getWebContent} from "../../headless/getWebContent";
import {ValueOf} from "../../types/ValueOf";
import {parseResponseEntity} from "../utils/parseResponseEntity";
import {getProductPriceInfo} from "../utils/getProductPriceInfo";
import {ProductGroup} from "../../database/models/Product/types";

interface GetProductProps {
    productUrl: string; searchedRequestUrl: string; productGroupNames: Record<string, TProductsNames>;
}

// Перекресток не работает с вещественными числами, поэтому 357.25 руб у них значится как 35725
const PRICE_DIVIDER = 100;

export const getProduct = async ({productUrl, searchedRequestUrl, productGroupNames}: GetProductProps) => {
    const productBody: PerekrestokResponse<VolumeProduct | WeightProduct> = await getWebContent({url: productUrl, searchedRequestUrl});
    return productBody.content.items.reduce<Array<ProductGroup>>((acc, item) => {
        const categoryName = item.group.key as ValueOf<typeof productGroupNames>;
        if (categoryName in productGroupNames) {
            const parsedItems = item.products.map(parseResponseEntity);

            const productPriceInfo = getProductPriceInfo(parsedItems, 0);
            const {minPrice, mediumPrice, maxPrice} = productPriceInfo;
            acc.push({
                name: productGroupNames[categoryName],
                minPrice: minPrice / PRICE_DIVIDER,
                mediumPrice: mediumPrice / PRICE_DIVIDER,
                maxPrice: maxPrice / PRICE_DIVIDER
            })
        }
        return acc;
    }, []);
}