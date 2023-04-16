import {Category, initDefaultCategories} from "./models/Category";
import {initProductDimensions, ProductDimension} from "./models/ProductDimension";
import {City} from "./models/City";
import {User} from "./models/User";
import {Product} from "./models/Product";
import {PlaceOfSale} from "./models/PlaceOfSale";
import {Favorite} from "./models/Favorite";
const alter = process.env.NODE_ENV === 'development';

export const dbInit = async () => {
    await Category.sync({alter});
    await initDefaultCategories();
    await ProductDimension.sync({alter});
    await initProductDimensions();
    await City.sync({alter});
    await User.sync({alter});
    await Product.sync({alter});
    await PlaceOfSale.sync({alter});
    await Favorite.sync({alter});
}