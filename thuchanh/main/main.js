"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Product_1 = require("../model/Product");
var ManagerProduct_1 = require("../sercive/ManagerProduct");
var input = require('readline-sync');
var manage = new ManagerProduct_1.ManagerProduct();
function mainMenu() {
    var choice;
    do {
        var menu = "\n        1.Show all product.\n        2.Find name product.\n        3.Create new product.\n        4.Update product.\n        5.Delete product.";
        console.log(menu);
        choice = +input.question('Enter your selection :');
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
    } while (choice != 0);
}
function show() {
    console.log(manage.listProduct);
}
function find() {
    var name = input.question('Enter name product :');
    if (name == '') {
        return console.log('Please enter name product :');
    }
    else
        console.log(manage.findByName(name));
}
function createProduct() {
    var name = input.question('Enter name Product :');
    var id = +input.question('Enter id :');
    var type = input.question('Enter type :');
    var price = +input.question('Enter price of product :');
    var describer = input.question('Describer :');
    var quantity = +input.question('Enter quantity of product :');
    var date = new Date();
    var newProduct = new Product_1.Product(id, name, type, price, date, describer, quantity);
    for (var i = 0; i < manage.listProduct.length; i++) {
        if (manage.listProduct[i].iDProduct === id) {
            return console.log('ID is duplicated!!!');
        }
        else
            manage.create(newProduct);
    }
}
function updateProduct() {
    var id = +input.question(' Enter id : ');
    var name = input.question(' Enter name Product: ');
    var type = input.question('Enter type : ');
    var price = +input.question(' Enter price : ');
    var quantity = +input.question('Enter quantity : ');
    var date = input.question('Enter date : ');
    var descriptionOfTheItem = input.question('Enter describer : ');
    var newProduct = new Product_1.Product(id, name, type, price, date, descriptionOfTheItem, quantity);
    for (var i = 0; i < manage.listProduct.length; i++) {
        if (manage.listProduct[i].iDProduct == newProduct.iDProduct) {
            return console.log('ID is duplicated!!');
        }
        else
            manage.update(id, newProduct);
    }
}
function deleteProduct() {
    var id = input.question('Enter id of product :');
    manage.delete(id);
}
mainMenu();
