// noinspection JSAnnotator

import {DataTypes, Model} from "sequelize";
import {sequelize} from "../../sequelize";
import {ICategory, ICategoryCreation} from "./types";
import {CATEGORY_NAMES} from "./categoryNames";

class Category extends Model<ICategory, ICategoryCreation> {
}

Category.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING(32),
        unique: true,
        allowNull: false,
    }
}, {sequelize: sequelize, modelName: 'category', timestamps: false})

const initDefaultCategories = async () => {
    return Promise.all(Object.values(CATEGORY_NAMES).map((categoryName) => {
        return Category.findOrCreate({where: {name: categoryName}})
    }))
}

export {Category, initDefaultCategories};