"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
var Product = /** @class */ (function () {
    function Product(iDProduct, nameProduct, typeProduct, priceProduct, date, describer, quantity) {
        this._iDProduct = iDProduct;
        this._nameProduct = nameProduct;
        this._typeProduct = typeProduct;
        this._priceProduct = priceProduct;
        this._date = date;
        this._describer = describer;
        this._quantity = quantity;
    }
    Object.defineProperty(Product.prototype, "iDProduct", {
        get: function () {
            return this._iDProduct;
        },
        set: function (value) {
            this._iDProduct = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "nameProduct", {
        get: function () {
            return this._nameProduct;
        },
        set: function (value) {
            this._nameProduct = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "typeProduct", {
        get: function () {
            return this._typeProduct;
        },
        set: function (value) {
            this._typeProduct = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "priceProduct", {
        get: function () {
            return this._priceProduct;
        },
        set: function (value) {
            this._priceProduct = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "date", {
        get: function () {
            return this._date;
        },
        set: function (value) {
            this._date = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "describer", {
        get: function () {
            return this._describer;
        },
        set: function (value) {
            this._describer = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "quantity", {
        get: function () {
            return this._quantity;
        },
        set: function (value) {
            this._quantity = value;
        },
        enumerable: false,
        configurable: true
    });
    return Product;
}());
exports.Product = Product;
