// noinspection JSAnnotator

import {DataTypes, Model} from "sequelize";
import {sequelize} from "../../sequelize";
import {IProductDimension, IProductDimensionCreation} from "./types";
import {DIMENSION_NAMES} from "./dimension";
import {Product} from "../Product";

class ProductDimension extends Model<IProductDimension, IProductDimensionCreation> {
}

ProductDimension.init({
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
}, {sequelize, modelName: 'productDimension', timestamps: false,})

const initProductDimensions = () => {
    return Promise.all(Object.values(DIMENSION_NAMES).map((dimensionName) => {
        return ProductDimension.findOrCreate({where: {name: dimensionName}})
    }))
}

export {ProductDimension, initProductDimensions}