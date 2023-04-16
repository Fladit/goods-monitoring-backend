import {Sequelize} from 'sequelize'

const {DB_NAME, DB_USERNAME, DB_PASSWORD} = process.env;

export const sequelize = new Sequelize(DB_NAME || 'test', DB_USERNAME || 'test', DB_PASSWORD || 'test', {
    host: 'localhost',
    dialect: 'postgres',
    pool: {
        max: 5,
        min: 0,
        acquire: 3000,
        idle: 10000
    },
})