// export function CalculateLateFee(daysLate: number): number {
function CalculateLateFee(daysLate: number): number {
    return daysLate * 0.25;
}

// export function MaxBooksAllowed(age: number) : number {
function MaxBooksAllowed(age: number) : number {
    if (age < 12) {
        return 3
    } else {
        return 10;
    }
}

function privateFuc(): void {
    console.log('This is private...');
}

export { CalculateLateFee, MaxBooksAllowed };
