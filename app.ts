import { Category } from './enums';
import { Book, Logger, Author, Librarian, Magazine } from './interfaces';
import { ReferenceItem, UniversityLibrarian } from './classes';
import refBook from './encyclopedia';
// import { CalculateLateFee as CalcFee, MaxBooksAllowed, Purge } from './lib/utilityFunctions';
import Shelf from './shelf';

function GetAllBooks(): Book[] {
    return [
        { id: 1, title: 'Ulysses', author: 'James Joyce', available: true, category: Category.Fiction },
        { id: 2, title: 'A Farewell to Arms', author: 'Ernest Hemingway', available: false, category: Category.Fiction  },
        { id: 3, title: 'I Know Why the Caged Bird Sings', author: 'Maya Angelou', available: true, category: Category.Poetry },
        { id: 4, title: 'Moby Dick', author: 'Herman Melville', available: true, category: Category.Fiction },
    ];
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

function GetBookByID(id: number): Book {
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

function GetTitles(author: string): string[];
function GetTitles(author: string, available: boolean): string[];
function GetTitles(author: string, available?: boolean): string[] {
    const allBooks = GetAllBooks();
    const searchResults: string[] = [];

    if (available !== undefined) {
        for (let book of allBooks) {
            if (book.author === author && book.available === available) {
                searchResults.push(book.title);
            }
        }
    } else {
        for (let book of allBooks) {
            if (book.author === author) {
                searchResults.push(book.title);
            }
        }
    }

    return searchResults;
}

function PrintBook(currentBook: Book): void {
    console.log(currentBook.title + ' by ' + currentBook.author);
}

// ******************************************************

let inventory: Array<Book> = GetAllBooks();

let bookShelf: Shelf<Book> = new Shelf<Book>();
inventory.forEach(book => bookShelf.add(book));

let firstBook: Book = bookShelf.getFirst();
console.log(firstBook);

let magazines: Array<Magazine> = [
    { title: 'Programming Language Monthly', publisher: 'Code Mags' },
    { title: 'Literary Fiction Quarterly', publisher: 'College Press' },
    { title: 'Five Points', publisher: 'GSU' },
];

let magazineShelf: Shelf<Magazine> = new Shelf<Magazine>();
magazines.forEach(magazine => magazineShelf.add(magazine));

let firstMagazine: Magazine = magazineShelf.getFirst();
console.log(firstMagazine);

magazineShelf.printTitles();

let mobyDickBook = bookShelf.find('Moby Dick');
console.log(`${mobyDickBook.title} (${mobyDickBook.author})`);

// let numberShelf: Shelf<number> = new Shelf<number>();
// [5, 10, 16].forEach(num => numberShelf.add(num));
// console.log(numberShelf.getFirst());
