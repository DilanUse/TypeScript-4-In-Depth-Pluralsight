"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Purge = exports.MaxBooksAllowed = exports.CalculateLateFee = void 0;
// export function CalculateLateFee(daysLate: number): number {
function CalculateLateFee(daysLate) {
    return daysLate * 0.25;
}
exports.CalculateLateFee = CalculateLateFee;
// export function MaxBooksAllowed(age: number) : number {
function MaxBooksAllowed(age) {
    if (age < 12) {
        return 3;
    }
    else {
        return 10;
    }
}
exports.MaxBooksAllowed = MaxBooksAllowed;
function privateFuc() {
    console.log('This is private...');
}
function Purge(inventory) {
    // implement some fancy logic
    // return the purged items
    return inventory.splice(2, inventory.length);
}
exports.Purge = Purge;
