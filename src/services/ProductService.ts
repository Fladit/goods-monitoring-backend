import {addProduct} from "./methods/addProduct";
import {getProductsByCategory} from "./methods/getProductsByCategory";


class ProductService {
    addProduct: typeof addProduct;
    getProductsByCategory: typeof getProductsByCategory;

    constructor() {
        this.addProduct = addProduct;
        this.getProductsByCategory = getProductsByCategory;
    }
}

const productService = new ProductService()

export {productService as ProductService};