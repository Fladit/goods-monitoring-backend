import {TCategoryNames} from "../../database/models/Category/categoryNames";
import {Product} from "../../database/models/Product";
import {Category} from "../../database/models/Category";
import {TProductsNames} from "../../database/models/Product/productNames";
import {ProductDimension} from "../../database/models/ProductDimension";
import {TDimensionNames} from "../../database/models/ProductDimension/dimension";
import {sequelize} from "../../database/sequelize";

interface IResponseProductGroup {
    name: TProductsNames;
    items: Array<Product>;
    dimension: TDimensionNames;
}

interface IResponseProductsByCategory {
    productGroups: Array<IResponseProductGroup>,
    category: Category
}

export const getProductsByCategory = async (categoryName: TCategoryNames): Promise<IResponseProductsByCategory> => {
    const category = await Category.findOne({where: {name: categoryName}});

    if (!category) {
        throw new Error(`Category is not exist`);
    }

    const products = await Product.findAll({
        where: {
            categoryId: category?.dataValues.id
        },
        order: [
            ['name', 'ASC'], ['createdAt', 'ASC'],
        ],
        attributes: {
            include: [
                [sequelize.fn('TO_CHAR', sequelize.col("createdAt"), "dd-mm-yyyy"), "displayDate"],
            ]
        }
    })
    const productDict = products.reduce((productMap, product) => {
        if (!product) {
            return productMap;
        }

        const { name } = product.dataValues;
        if (productMap[name]) {
            productMap[name].push(product);
        }
        else {
            productMap[name] = [product];
        }

        return productMap;
    }, {} as Record<TProductsNames, Array<typeof products[0]>>)

    const productsDimensions = {} as Record<TProductsNames, TDimensionNames>;

    for (const key of Object.keys(productDict)) {
        const productName = key as TProductsNames;
        const items = productDict[productName];

        if (!items.length) {
            delete productDict[productName];
        }

        const dimension = await ProductDimension.findOne({where: {id: items[0].dataValues.productDimensionId}})

        if (dimension) {
            productsDimensions[productName] = dimension?.dataValues.name;
        }
    }

    const productGroups = Object.keys(productDict).reduce((groups, name) => {
        const groupName = name as TProductsNames;
        const items = productDict[groupName];
        const dimension = productsDimensions[groupName]

        groups.push({name: groupName, dimension, items });

        return groups;
    }, [] as Array<IResponseProductGroup>)

    return {category, productGroups}
}