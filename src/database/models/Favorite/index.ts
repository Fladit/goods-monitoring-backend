import {DataTypes, Model} from "sequelize";
import {IFavorite} from "./types";
import {sequelize} from "../../sequelize";
import {Product} from "../Product";
import {User} from "../User";

// noinspection JSAnnotator
class Favorite extends Model<IFavorite, IFavorite> {}

Favorite.init({
    productId: {
        type: DataTypes.INTEGER,
        references: {
            model: Product,
            key: 'id',
        },
        allowNull: false,
    },
    userId: {
        type: DataTypes.INTEGER,
        references: {
            model: User,
            key: 'id',
        },
        allowNull: false,
    }
}, {sequelize, modelName: 'favorite', timestamps: false})

export {Favorite};