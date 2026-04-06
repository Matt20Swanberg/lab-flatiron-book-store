const bookStore = {
    name: 'Flatbooks Technical Books',
    books: [
        {
            id: 1,
            title: 'Eloquent JavaScript: A Modern Introduction to Programming',
            author: 'Marjin Haverbeke',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/51IKycqTPUL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg',

        },
        {
            id: 2,
            title: 'JavaScript & JQuery: Interactive Front-End Web Development',
            author: 'Jon Duckett',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/31SRWF+LkKL._SX398_BO1,204,203,200_.jpg'
        },
        {
            id: 3,
            title: 'JavaScript: The Good Parts',
            author: 'Douglas Crockford',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/5131OWtQRaL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg',
        },
        {
            id: 4,
            title: 'JavaScript: The Definitive Guide',
            author: 'David Flanagan',
            imageUrl: "https://images-na.ssl-images-amazon.com/images/I/51wijnc-Y8L._SX379_BO1,204,203,200_.jpg"

        },
        {
            id: 5,
            title: 'You Don’t Know JS',
            author: 'Kyle Simpson',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/41T5H8u7fUL._SX331_BO1,204,203,200_.jpg'
        },
        {
            id: 6,
            title: 'Cracking the Coding Interview',
            author: 'Gayle Laakmann McDowell',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/41oYsXjLvZL._SY344_BO1,204,203,200_.jpg'

        }
    ]
}

function displayBookStore(bookStore) {
    // Select DOM elements
    const bookStoreTitle = document.querySelector("#header");
    const bookList = document.querySelector("#book-list")

    // Update header text (i.e. Bookstore Name)
    bookStoreTitle.textContent = bookStore.name

    // Loop through each book
    const books = bookStore.books;
    books.forEach(element => {
        // Create elements for book title, author, and image
        const bookContainer = document.createElement("li")
        bookContainer.className = "list-li";
        const bookTitle = document.createElement("h3")
        const bookAuthor = document.createElement("p")
        const bookImage = document.createElement("img")

        // Add content to new elements 
        bookTitle.textContent = element.title;
        bookAuthor.textContent = element.author;
        bookImage.src = element.imageUrl;

        //Build structure of this book container
        bookContainer.append(bookTitle, bookAuthor, bookImage);
        bookList.append(bookContainer)
    });
}

// Run function on page load
displayBookStore(bookStore);