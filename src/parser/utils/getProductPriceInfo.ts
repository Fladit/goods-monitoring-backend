import {ICommonProduct} from "../../database/models/Product/types";

export const getProductPriceInfo = (products: Array<ICommonProduct>, zerosAfterDecimal = 0) => {
    const productsMiddle = getMiddle(products.length);
    const handledProductsByValue:Array<ICommonProduct> = products.map(product => {
        const {value, price} = product;
        return {...product, value: 1000, price: + (price / value * 1000).toFixed(zerosAfterDecimal) } as ICommonProduct;
    })
    const sortedProducts = handledProductsByValue.sort((a, b) => a.price - b.price);

    return {
        minPrice: sortedProducts[0].price,
        mediumPrice: sortedProducts[productsMiddle].price,
        maxPrice: sortedProducts[handledProductsByValue.length - 1].price
    }
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