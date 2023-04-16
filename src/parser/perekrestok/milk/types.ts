export interface MilkResponse {
    content: {
        items: Array<MilkInfo>
    }
}

interface MilkInfo {
    group: {
        key: string;
        title: string;
    },
    products: Array<MilkProduct>;
}

interface MilkProduct {
    masterData: {
        unit: number,
        weight: number,
        volume: number,
    }
    title: string;
    priceTag: {
        price: number,
    }
}