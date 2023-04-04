import {ForeignKey} from "sequelize";
import {Category} from "../Category";
import {ProductType} from "../ProductType";

export interface IProduct {
    id: number;
    name: string;
    price: number;
    createdAt?: Date;
    value: number;
    categoryId: ForeignKey<Category['id']>
    productTypeId: ForeignKey<ProductType['id']>
}

export interface IProductCreation extends Omit<IProduct, 'id' | 'createdAt'> {}