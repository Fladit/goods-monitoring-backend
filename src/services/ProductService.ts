import {ICommonProduct} from "../database/models/Product/types";
import {Product} from "../database/models/Product";
import {ProductDimension} from "../database/models/ProductDimension";
import {Category} from "../database/models/Category";
import {IDimensionByCategory, IProductsByCategory} from "../database/models/Product/productNames";

interface AddProductProps<T extends keyof IProductsByCategory> extends Omit<ICommonProduct, 'name'> {
    categoryName: T;
    name: IProductsByCategory[T];
    dimensionName: IDimensionByCategory[T];
}

class ProductService {
    async addProduct <T extends keyof IProductsByCategory> ({name, price, value, dimensionName, categoryName}: AddProductProps<T>) {
        const category = await Category.findOne({where: {name: categoryName}});
        const dimension = await ProductDimension.findOne({where: {name: dimensionName}});

        if (category && dimension) {
            return Product.create({name, price, value, productDimensionId: dimension.dataValues.id, categoryId: category.dataValues.id});
        }

        throw new Error(`Incorrect input value: category = ${category} ; dimension = ${dimension}`);
    }
}

const service = new ProductService();

export default service;