
export interface ICategory {
    id: number;
    name: string;
}

export interface ICategoryCreation extends Omit<ICategory, 'id'>{
}