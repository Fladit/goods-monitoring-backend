import {ForeignKey} from "sequelize";
import {Product} from "../Product";
import {User} from "../User";

export interface IFavorite {
    productId: ForeignKey<Product['id']>,
    userId: ForeignKey<User['id']>,
}