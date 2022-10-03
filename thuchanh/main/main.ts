import {Product} from "../model/Product";
import {ManagerProduct} from "../sercive/ManagerProduct";
import {Manager} from "../sercive/manager";
import {inflate} from "zlib";

let input = require('readline-sync');
let manage: ManagerProduct = new ManagerProduct();

function mainMenu() {
    let choice: number;
    do {
        let menu = `
        1.Show all product.
        2.Find name product.
        3.Create new product.
        4.Update product.
        5.Delete product.`
        console.log(menu)
        choice = +input.question('Enter your selection :')
        switch (choice) {
            case 1:
                show();
                break;
            case 2:
                find();
                break;
            case 3:
                createProduct();
                break;
            case 4:
                updateProduct();
                break;
            case 5:
                deleteProduct();
                break;
        }
    } while (choice != 0)
}

function show() {
    console.log(manage.listProduct)
}

function find() {
    let name = input.question('Enter name product :');
    if (name == '') {
       return  console.log('Please enter name product :')
    } else console.log(manage.findByName(name))
}

function createProduct() {
    let name = input.question('Enter name Product :');
    let id = +input.question('Enter id :');
    let type = input.question('Enter type :');
    let price = +input.question('Enter price of product :');
    let describer = input.question('Describer :');
    let quantity = +input.question('Enter quantity of product :')
    let date = new Date();
    let newProduct: Product = new Product(id, name, type, price, date, describer, quantity)
    for (let i = 0; i < manage.listProduct.length; i++) {
        if (manage.listProduct[i].iDProduct === id) {
           return  console.log('ID is duplicated!!!')
        } else manage.create(newProduct)
    }

}

function updateProduct() {

    let id = +input.question(' Enter id : ');
    let name = input.question(' Enter name Product: ');
    let type = input.question('Enter type : ');
    let price = +input.question(' Enter price : ');
    let quantity = +input.question('Enter quantity : ');
    let date = input.question('Enter date : ');
    let descriptionOfTheItem = input.question('Enter describer : ');
    let newProduct: Product = new Product(id, name, type, price, date, descriptionOfTheItem, quantity)

    for (let i = 0; i < manage.listProduct.length; i++) {
        if (manage.listProduct[i].iDProduct == newProduct.iDProduct) {
          return   console.log('ID is duplicated!!')
        } else manage.update(id, newProduct)
    }

}

function deleteProduct() {
    let id = input.question('Enter id of product :');
    manage.delete(id)
}

mainMenu()