import {VolumeProduct, WeightProduct} from "../perekrestok/productType";
import {ICommonProduct} from "../../database/models/Product/types";

export const parseResponseEntity = (entity: VolumeProduct | WeightProduct) => {
    const value = isVolumeProduct(entity)? entity.masterData.volume : entity.masterData.weight;
    return {name: entity.title, price: entity.priceTag.price, value: value} as ICommonProduct
}

function isVolumeProduct(value: VolumeProduct | WeightProduct): value is VolumeProduct {
    return value.hasOwnProperty('volume');
}