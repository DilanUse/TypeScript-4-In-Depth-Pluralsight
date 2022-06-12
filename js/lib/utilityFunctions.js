"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaxBooksAllowed = exports.CalculateLateFee = void 0;
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
