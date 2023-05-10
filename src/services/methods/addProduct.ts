import {IDimensionByCategory, IProductsByCategory} from "../../database/models/Product/productNames";
import {Category} from "../../database/models/Category";
import {ProductDimension} from "../../database/models/ProductDimension";
import {Product} from "../../database/models/Product";
import {ProductGroup} from "../../database/models/Product/types";

interface AddProductItem<T extends keyof IProductsByCategory> extends Omit<ProductGroup, 'name'> {
    categoryName: T;
    name: IProductsByCategory[T];
    dimensionName: IDimensionByCategory[T];
}

// По стандарту цена на товары расчитывается на 1000г/1000мл товара
const STANDARD_VALUE = 1000;

export const addProduct = async <T extends keyof IProductsByCategory> (product: AddProductItem<T>) => {
    const {name, dimensionName, categoryName, minPrice, mediumPrice, maxPrice } = product;
    const category = await Category.findOne({where: {name: categoryName}});
    const dimension = await ProductDimension.findOne({where: {name: dimensionName}});

    if (category && dimension) {
        return Product.create(
            {
                name,
                productDimensionId: dimension.dataValues.id,
                categoryId: category.dataValues.id,
                minPrice,
                mediumPrice,
                maxPrice,
                value: STANDARD_VALUE
            });
    }

    throw new Error(`Incorrect input value: category = ${category} ; dimension = ${dimension}`);
}