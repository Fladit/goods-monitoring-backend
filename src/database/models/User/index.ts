// noinspection JSAnnotator

import {DataTypes, Model} from "sequelize";
import {IUser, IUserCreation} from "./types";
import {City} from "../City";
import {sequelize} from "../../sequelize";

class User extends Model<IUser, IUserCreation> {
}

User.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING(32),
        allowNull: false,
    },
    cookie: {
        type: DataTypes.STRING(256),
        allowNull: true,
    },
    password: {
        type: DataTypes.STRING(256),
        allowNull: false,
    },
    cityId: {
        type: DataTypes.INTEGER,
        references: {
            model: City,
            key: 'id'
        },
        allowNull: false,
    }
}, {sequelize, modelName: 'user', timestamps: true})

export {User};