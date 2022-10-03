import {Product} from "../model/Product";

export interface Manager<T> {
    create(t: T);

    read();

    update(id:number,t:Product);

    delete(id: number);

    findByName(name: string);

    findById(id:number)
}