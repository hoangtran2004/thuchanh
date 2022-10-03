import {finished} from "stream";

export class Product {
private _iDProduct:number;
private _nameProduct:string;
private _typeProduct:string;
private _priceProduct:number;
private _date:Date;
private _describer:string;
private _quantity:number;

    constructor(iDProduct: number, nameProduct: string, typeProduct: string, priceProduct: number, date: Date, describer: string, quantity: number) {
        this._iDProduct = iDProduct;
        this._nameProduct = nameProduct;
        this._typeProduct = typeProduct;
        this._priceProduct = priceProduct;
        this._date = date;
        this._describer = describer;
        this._quantity = quantity;
    }

    get iDProduct(): number {
        return this._iDProduct;
    }

    set iDProduct(value: number) {
        this._iDProduct = value;
    }

    get nameProduct(): string {
        return this._nameProduct;
    }

    set nameProduct(value: string) {
        this._nameProduct = value;
    }

    get typeProduct(): string {
        return this._typeProduct;
    }

    set typeProduct(value: string) {
        this._typeProduct = value;
    }

    get priceProduct(): number {
        return this._priceProduct;
    }

    set priceProduct(value: number) {
        this._priceProduct = value;
    }

    get date(): Date {
        return this._date;
    }

    set date(value: Date) {
        this._date = value;
    }

    get describer(): string {
        return this._describer;
    }

    set describer(value: string) {
        this._describer = value;
    }

    get quantity(): number {
        return this._quantity;
    }

    set quantity(value: number) {
        this._quantity = value;
    }
}