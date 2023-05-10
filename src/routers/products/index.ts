import express from 'express';
import {ProductController} from "../../controllers/ProductController";

const productsRouter = express.Router({});

productsRouter.get('/:category', ProductController.getProductsByCategory)

export {productsRouter}