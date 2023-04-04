import {DataTypes, Model} from "sequelize";
import {IPlaceOfSale} from "./types";
import {sequelize} from "../../sequelize";
import {Product} from "../Product";
import {City} from "../City";

// noinspection JSAnnotator
class PlaceOfSale extends Model<IPlaceOfSale, IPlaceOfSale> {}

PlaceOfSale.init({
    productId: {
        type: DataTypes.INTEGER,
        references: {
            model: Product,
            key: 'id',
        },
        allowNull: false,
    },
    cityId: {
        type: DataTypes.INTEGER,
        references: {
            model: City,
            key: 'id',
        },
        allowNull: false,
    }
}, {sequelize, modelName: 'placeOfSale', timestamps: false});

export {PlaceOfSale};