// Задание 1
// Представьте, что у вас есть класс для управления библиотекой. В этом классе будет приватное свойство для хранения списка книг, а также методы для добавления книги, удаления книги и получения информации о наличии книги.

// Класс должен содержать приватное свойство #books, которое инициализируется пустым массивом и представляет собой список книг в библиотеке.

// Реализуйте геттер allBooks, который возвращает текущий список книг.

// Реализуйте метод addBook(title), который позволяет добавлять книгу в список. Если книга с таким названием уже существует в списке, выбросьте ошибку с соответствующим сообщением.

// Реализуйте метод removeBook(title), который позволит удалять книгу из списка по названию. Если книги с таким названием нет в списке, выбросьте ошибку с соответствующим сообщением.

// Реализуйте метод hasBook(title), который будет проверять наличие книги в библиотеке и возвращать true или false в зависимости от того, есть ли такая книга в списке или нет.

// Реализуйте конструктор, который принимает начальный список книг (массив) в качестве аргумента. Убедитесь, что предоставленный массив не содержит дубликатов; в противном случае выбрасывайте ошибку.

class Library {
    #books = [];

    get allBooks() {
        return this.#books;
    }

    addBook(title) {
        if (this.hasBook(title)) {
            throw new Error('Книга с таким названием уже существует в списке');
        }
        this.#books.push(title);
    }

    removeBook(title) {
        if (this.hasBook(title)) {
            let index = this.#books.indexOf(title);
            this.#books.splice(index, 1);
        }
        else throw new Error('Книга с таким названием не найдена в списке');
    }

    hasBook(title) {
        let availabilityBook = (this.#books.includes(title));
        return availabilityBook;
        // if (this.#books.includes(title)) {
        //     return true;
        // }
        // else return false;
    }

    constructor(listOfBooks) {
        const findDuplicates = arr => arr.filter((item, index) => arr.indexOf(item) !== index);
        const duplicates = findDuplicates(listOfBooks);
        if (duplicates.length > 0) {
            throw new Error("В списке повторяющиеся книги");
        }
        this.#books = listOfBooks;
    }
}

let library = new Library(['репка', 'три поросенка']);
console.log(library.allBooks);

//Добавлять книгу в список
library.addBook('русалочка');
console.log(library.allBooks);

// library.addBook('репка');
// console.log(library.allBooks);

//Удалить книгу из списка по названию
library.removeBook('репка');
console.log(library.allBooks);

// Проверить наличие книги в библиотеке
// console.log(library.hasBook('рeпка'));
