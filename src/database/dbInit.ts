import {Category} from "./models/Category";
import {ProductType} from "./models/ProductType";
import {City} from "./models/City";
import {User} from "./models/User";
import {Product} from "./models/Product";
import {PlaceOfSale} from "./models/PlaceOfSale";
import {Favorite} from "./models/Favorite";
const alter = process.env.NODE_ENV === 'development';

export const dbInit = async () => {
    await Category.sync({alter});
    await ProductType.sync({alter});
    await City.sync({alter});
    await User.sync({alter});
    await Product.sync({alter});
    await PlaceOfSale.sync({alter});
    await Favorite.sync({alter});
}