import express from 'express'
import {config} from 'dotenv';
import { json } from 'body-parser'
import cors from 'cors'
config();

import {sequelize} from '../database/sequelize'
import {dbInit} from "../database/dbInit";
import {uploadMilk} from "../parser/perekrestok/milk/uploadMilk";
import {uploadVegetables} from "../parser/perekrestok/vegetables/uploadVegetables";
import {ProductController} from "../controllers/ProductController";
import {errorHandler} from "./middlewares/errorHandler";
import {productsRouter} from "../routers/products";

const app = express();
const PORT = process.env.NODE_PORT;

app.use(cors({origin: 'http://localhost:8080'}));
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
    uploadVegetables().then((vegetablesBody) => {
        res.send(vegetablesBody);
    })
})

app.use('/products', productsRouter);

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

app.use(errorHandler)

export default app;