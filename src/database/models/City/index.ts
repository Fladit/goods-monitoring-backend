// noinspection JSAnnotator

import {DataTypes, Model} from "sequelize";
import {ICity, ICityCreation} from "./types";
import {sequelize} from "../../sequelize";


class City extends Model<ICity, ICityCreation> {
}

City.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING(32),
        allowNull: false,
    }
}, {sequelize, modelName: 'city', timestamps: false})

export {City};