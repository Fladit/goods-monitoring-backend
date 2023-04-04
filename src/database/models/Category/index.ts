// noinspection JSAnnotator

import {DataTypes, Model} from "sequelize";
import {sequelize} from "../../sequelize";
import {ICategory, ICategoryCreation} from "./types";

class Category extends Model<ICategory, ICategoryCreation> {
}

Category.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING(16),
        unique: true,
        allowNull: false,
    }
}, {sequelize: sequelize, modelName: 'category', timestamps: false})

export {Category}