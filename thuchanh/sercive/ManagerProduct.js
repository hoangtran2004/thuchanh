"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ManagerProduct = void 0;
var Product_1 = require("../model/Product");
var ManagerProduct = /** @class */ (function () {
    function ManagerProduct() {
        this.listProduct = [];
        this.listProduct.push(new Product_1.Product(1, 'Apple', 'Fruit', 12000, new Date('11-02-2022'), 'Fresh', 12));
        this.listProduct.push(new Product_1.Product(2, 'Orange', 'Fruit', 14000, new Date('11-02-2022'), 'Fresh', 14));
        this.listProduct.push(new Product_1.Product(3, 'Banana', 'Fruit', 15000, new Date('11-02-2022'), 'Fresh', 14));
        this.listProduct.push(new Product_1.Product(4, 'Pepsi', 'Water', 16000, new Date('11-02-2022'), 'Fresh', 16));
        this.listProduct.push(new Product_1.Product(5, 'Coca', 'Water', 17000, new Date('11-02-2022'), 'Fresh', 17));
    }
    ManagerProduct.prototype.create = function (t) {
        this.listProduct.push(t);
    };
    ManagerProduct.prototype.delete = function (id) {
        var index = this.findById(id);
        this.listProduct.splice(index, 1);
    };
    ManagerProduct.prototype.findByName = function (name) {
        return this.listProduct.filter(function (item) { return item.nameProduct.includes(name); });
    };
    ManagerProduct.prototype.read = function () {
        if (this.listProduct == null) {
            return 'List product is empty!!';
        }
        else
            return this.listProduct;
    };
    ManagerProduct.prototype.update = function (id, t) {
        var index = this.findById(id);
        this.listProduct[index] = t;
    };
    ManagerProduct.prototype.findById = function (id) {
        for (var i = 0; i < this.listProduct.length; i++) {
            if (this.listProduct[i].iDProduct === id) {
                return i;
            }
        }
    };
    return ManagerProduct;
}());
exports.ManagerProduct = ManagerProduct;
