export type WeightPerekrestokResponse = PerekrestokResponse<WeightProduct>;
export type VolumePerekrestokResponse = PerekrestokResponse<VolumeProduct>;


export interface PerekrestokResponse<Product> {
    content: {
        items: Array<ProductInfo<Product>>
    }
}

interface ProductInfo<Product> {
    group: {
        key: string;
        title: string;
    },
    products: Array<Product>;
}

export type WeightProduct = CommonProduct & {
    masterData: WeightProductData
};


export type VolumeProduct = CommonProduct & {
    masterData: VolumeProductData
};

interface CommonProduct {
    title: string;
    priceTag: {
        price: number,
    }
}

interface WeightProductData {
        unit?: number,
        weight?: number,
}

interface VolumeProductData {
        unit?: number,
        volume?: number,
}