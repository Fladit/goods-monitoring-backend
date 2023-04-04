import {ForeignKey} from "sequelize";
import {Product} from "../Product";
import {City} from "../City";

export interface IPlaceOfSale {
    productId: ForeignKey<Product['id']>,
    cityId: ForeignKey<City['id']>,
}