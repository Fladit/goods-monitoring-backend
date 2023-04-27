import express from 'express'
import {config} from 'dotenv';
import { json } from 'body-parser'
config();

import {sequelize} from '../database/sequelize'
import {dbInit} from "../database/dbInit";
import {uploadMilk} from "../parser/perekrestok/milk/uploadMilk";
import {uploadVegetables} from "../parser/perekrestok/vegetables/uploadVegetables";

const app = express();
const PORT = process.env.NODE_PORT;

app.use(json());

app.get('/', (req, res) => {
    res.send('Hello world!');
})

app.get('/milk', (req, res) => {
    uploadMilk().then((milkBody) => {
        res.send(milkBody);
    })
})

app.get('/vegetables', (req, res) => {
    uploadVegetables().then((vegetableBody) => {
        res.send(vegetableBody);
    })
})

dbInit().then(async () => {
    app.listen(PORT, async () => {
        console.log('App listen at port: ', PORT);
        try {
            await sequelize.authenticate()
            console.log('Connection to database has been established successfully.')
        }
        catch (e) {
            console.error('Unable to connect to the database:', e)
        }
    })
})

export default app;