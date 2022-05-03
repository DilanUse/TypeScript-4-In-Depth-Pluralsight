function GetAllBooks() {
    let books = [
        { id: 1, title: 'Ulysses', author: 'James Joyce', available: true, category: Category.Fiction },
        { id: 2, title: 'A Farewell to Arms', author: 'Ernest Hemingway', available: false, category: Category.Fiction  },
        { id: 3, title: 'I Know Why the Caged Bird Sings', author: 'Maya Angelou', available: true, category: Category.Poetry },
        { id: 4, title: 'Moby Dick', author: 'Herman Melville', available: true, category: Category.Fiction },
    ];

    return books;
}

function LogFirstAvailable(books = GetAllBooks()): void {
    let numberOfBooks: number = books.length;
    let firstAvailable: string = '';

    for (let currentBook of books) {
        if (currentBook.available) {
            firstAvailable = currentBook.title;
            break;
        }
    }

    console.log('Total Books: ' + numberOfBooks);
    console.log('First Available: ' + firstAvailable);
}

function GetBookTitlesByCategory(categoryFilter: Category = Category.Fiction): Array<string> {
    console.log('Getting books in category: ' + Category[categoryFilter]);

    const allBooks = GetAllBooks();
    const filteredTitles: string[] = [];

    for (let currentBook of allBooks) {
        if (currentBook.category === categoryFilter) {
            filteredTitles.push(currentBook.title);
        }
    }

    return filteredTitles;
}

function LogBookTitles(titles: string[]): void {
    for (let title of titles) {
        console.log(title);
    }
}

enum Category {
    Biography,
    Poetry,
    Fiction,
    History,
    Children,
}

function GetBookByID(id: number) {
    const allBooks = GetAllBooks();
    return allBooks.filter(book => book.id === id)[0];
}

function CreateCustomerID(name: string, id: number): string {
    return name + id;
}

function CreateCustomer(name: string, age?: number, city?: string): void {
    console.log('Creating customer ' + name);

    if (age) {
        console.log('Age: ' + age);
    }

    if (city) {
        console.log('City: ' + city);
    }
}

function CheckoutBooks(customer: string, ...bookIDs: number[]): string[] {
    console.log('Checking out books for ', customer);

    let booksCheckedOut: string[] = [];

    for (let id of bookIDs) {
        let book = GetBookByID(id);

        if (book.available) {
            booksCheckedOut.push(book.title);
        }
    }

    return booksCheckedOut;
}

// ******************************************************

let myBooks: string[] = CheckoutBooks('Camila', 1, 2, 4);
myBooks.forEach(title => console.log(title));

// LogFirstAvailable();

// let fictionsBooks = GetBookTitlesByCategory();
// fictionsBooks.forEach(title => console.log(title));

// CreateCustomer('Michelle');
// CreateCustomer('Michelle', 20);
// CreateCustomer('Michelle', 25, 'Atlanta');

// let x: number;
// x = 5;
//
// let IdGenerator: (chars: string, nums: number) => string;
// // IdGenerator = CreateCustomerID; // declared function
// IdGenerator = (name: string, id: number) => { return name + id }; // inline function
// // IdGenerator = (name: string, id: string) => { return name + id }; // error
//
// let myID: string = IdGenerator('daniel', 15);
// console.log(myID);



// const fictionsBooks = GetBookTitlesByCategory(Category.Fiction);
// fictionsBooks.forEach((val, idx, arr) => console.log(++idx + ' - ' + val));
