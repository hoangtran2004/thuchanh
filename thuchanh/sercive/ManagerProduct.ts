import {Product} from "../model/Product";
import {Manager} from "./manager";

export class ManagerProduct implements Manager<Product> {

    listProduct: Product[] = [];

    constructor() {
        this.listProduct.push(new Product(1, 'Apple', 'Fruit', 12000, new Date('11-02-2022'), 'Fresh',12));
        this.listProduct.push(new Product(2, 'Orange', 'Fruit', 14000, new Date('11-02-2022'), 'Fresh',14));
        this.listProduct.push(new Product(3, 'Banana', 'Fruit', 15000, new Date('11-02-2022'), 'Fresh',14));
        this.listProduct.push(new Product(4, 'Pepsi', 'Water', 16000, new Date('11-02-2022'), 'Fresh',16));
        this.listProduct.push(new Product(5, 'Coca', 'Water', 17000, new Date('11-02-2022'), 'Fresh',17));
    }

    create(t: Product) {
        this.listProduct.push(t)
    }

    delete(id: number) {
     let index=this.findById(id);
      this.listProduct.splice(index,1)
    }

    findByName(name: string) {
        return this.listProduct.filter(item => item.nameProduct.includes(name))
    }

    read() {
       if (this.listProduct==null){
          return 'List product is empty!!'
       }else return this.listProduct
    }

    update(id:number,t:Product) {
        let index=this.findById(id);
        this.listProduct[index]=t
    }

    findById(id: number) {
        for (let i = 0; i < this.listProduct.length; i++) {
            if (this.listProduct[i].iDProduct===id){
                return i
            }
        }
    }
}