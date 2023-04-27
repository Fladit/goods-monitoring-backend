import {ForeignKey} from "sequelize";
import {Category} from "../Category";
import {ProductDimension} from "../ProductDimension";
import {TProductsNames} from "./productNames";

export interface IProduct {
    id: number;
    name: TProductsNames;
    minPrice: number;
    mediumPrice: number;
    maxPrice: number;
    createdAt?: Date;
    value: number;
    categoryId: ForeignKey<Category['id']>
    productDimensionId: ForeignKey<ProductDimension['id']>
}

export interface IProductCreation extends Omit<IProduct, 'id' | 'createdAt'> {}

export interface ICommonProduct {
    name: IProduct['name'];
    price: number;
    value: number
}

export interface ProductGroup {
    name: TProductsNames;
    minPrice: number;
    mediumPrice: number;
    maxPrice: number;
}