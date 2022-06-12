"use strict";
exports.__esModule = true;
exports.ReferenceItem = exports.UniversityLibrarian = void 0;
var UniversityLibrarian = /** @class */ (function () {
    function UniversityLibrarian() {
    }
    UniversityLibrarian.prototype.assistCustomer = function (customerName) {
        console.log(this.name + ' is assisting ' + customerName);
    };
    return UniversityLibrarian;
}());
exports.UniversityLibrarian = UniversityLibrarian;
var ReferenceItem = /** @class */ (function () {
    function ReferenceItem() {
        console.log('Creating a new ReferenceItem...');
    }
    ReferenceItem.prototype.printItem = function () {
        console.log("".concat(this.title, " was published in ").concat(this.year, "."));
    };
    return ReferenceItem;
}());
exports.ReferenceItem = ReferenceItem;
