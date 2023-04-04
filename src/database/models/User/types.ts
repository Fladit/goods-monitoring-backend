import {ForeignKey} from "sequelize";
import {City} from "../City";

export interface IUser {
    id: number;
    name: string;
    password: string;
    cookie?: string;
    created_at?: Date;
    cityId?: ForeignKey<City['id']>;
}

export interface IUserCreation extends Omit<IUser, 'id' | 'created_at'> {}