// noinspection JSAnnotator

import {DataTypes, Model} from "sequelize";
import {sequelize} from "../../sequelize";
import {IProductType, IProductTypeCreation} from "./types";

class ProductType extends Model<IProductType, IProductTypeCreation> {
}

ProductType.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING(32),
        allowNull: false,
        unique: true,
    },
    dimension: {
        type: DataTypes.STRING(16),
        allowNull: false,
    }
}, {sequelize, modelName: 'productType', timestamps: false,})

export {ProductType}