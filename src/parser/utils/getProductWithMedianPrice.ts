import {ICommonProduct} from "../../database/models/Product/types";

export const getProductWithMedianPrice = (products: Array<ICommonProduct>, zerosAfterDecimal = 0) => {
    const productsMiddle = getMiddle(products.length);
    const handledProductsByValue:Array<ICommonProduct> = products.map(product => {
        const {value, price} = product;
        return {...product, value: 1000, price: + (price / value * 1000).toFixed(zerosAfterDecimal) } as ICommonProduct;
    })
    return handledProductsByValue.sort((a, b) => a.price - b.price)[productsMiddle];
}

function getMiddle (length: number) {
    if (length === 1) {
        return 0;
    }

    const mid = length / 2;

    return isEven(length)? mid : Math.ceil(mid);
}

function isEven(num: number) {
    return num % 2 === 0;
}