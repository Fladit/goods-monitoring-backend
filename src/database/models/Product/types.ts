import {ForeignKey} from "sequelize";
import {Category} from "../Category";
import {ProductDimension} from "../ProductDimension";
import {TProductsNames} from "./productNames";

export interface IProduct {
    id: number;
    name: TProductsNames;
    price: number;
    createdAt?: Date;
    value: number;
    categoryId: ForeignKey<Category['id']>
    productDimensionId: ForeignKey<ProductDimension['id']>
}

export interface IProductCreation extends Omit<IProduct, 'id' | 'createdAt'> {}

export interface ICommonProduct extends Pick<IProductCreation, 'name' | 'price' | 'value'> {}

export interface ProductGroup {
    name: TProductsNames;
    medianPriceItem: ICommonProduct;
}