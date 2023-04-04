export interface ICity {
    id: number;
    name: string;
}

export interface ICityCreation extends Omit<ICity, 'id'> {
}

