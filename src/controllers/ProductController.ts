import {Request, Response, NextFunction} from 'express'
import { CATEGORY_NAMES_FROM_QUERY} from "../database/models/Category/categoryNames";
import {ProductService} from "../services/ProductService";
import {RequestError} from "../utils/RequestError";

class ProductController {
    async getProductsByCategory(req: Request, res: Response, next: NextFunction) {
        const category = req.params.category as keyof typeof CATEGORY_NAMES_FROM_QUERY;

        if (!(category && category in CATEGORY_NAMES_FROM_QUERY)) {
            const err = new RequestError(`Invalid category name ${category}`, 400);
            return next(err)
        }

        const validCategory = CATEGORY_NAMES_FROM_QUERY[category];

        const products = await ProductService.getProductsByCategory(validCategory);

        res.send(products);
    }
}

const productController = new ProductController();

export {productController as ProductController};