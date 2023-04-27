import {VolumeProduct, WeightProduct} from "../perekrestok/productType";
import {ICommonProduct} from "../../database/models/Product/types";

export const parseResponseEntity = (entity: VolumeProduct | WeightProduct) => {
    let value = isVolumeProduct(entity)? entity.masterData.volume : entity.masterData.weight;

    // unit === 2 означает, что товар продается на развес, т.е указана цена за килограмм (к примеру, 25 руб за 1кг)
    if (entity.masterData.unit === 2) {
        value = 1000;
    }

    return {name: entity.title, price: entity.priceTag.price, value: value} as ICommonProduct
}

function isVolumeProduct(value: VolumeProduct | WeightProduct): value is VolumeProduct {
    return value.hasOwnProperty('volume');
}