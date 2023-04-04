// noinspection JSAnnotator

import {DataTypes, Model} from "sequelize";
import {IProduct, IProductCreation} from "./types";
import {sequelize} from "../../sequelize";
import {Category} from "../Category";
import {ProductType} from "../ProductType";

class Product extends Model<IProduct, IProductCreation> {
}

Product.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING(32),
        allowNull: false,
    },
    price: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    createdAt: DataTypes.DATE,
    value: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    categoryId: {
        type: DataTypes.INTEGER,
        references: {
            model: Category,
            key: 'id'
        },
        allowNull: false,
    },
    productTypeId: {
        type: DataTypes.INTEGER,
        references: {
            model: ProductType,
            key: 'id',
        },
        allowNull: false,
    }
}, {sequelize, modelName: 'product'})

export {Product};