//DOM Elements
const bookShelves = document.getElementById('book-shelves');
const AddformElement = document.getElementById('add-form');
const deleteFormElement = document.getElementById('delete-form');

//Add form elements
const titleInputElement = document.getElementById('title');
const authorInputElement = document.getElementById('author'); 
const pagesInputElement = document.getElementById('pages');
const notYetElement = document.getElementById('not-yet');
const onGoingElement = document.getElementById('on-going');
const readElement = document.getElementById('read');

//Button Elements
const addBookButtonElement = document.getElementById('add-book-button');
const submitButtonElement = document.getElementById('submit-button');
const deleteBookButtonElement = document.getElementById('delete-book-button');
const deleteButtonElement = document.getElementById('delete-button');


//data
const myBooks = [ 
    {id:1,title: "The Hobbit", author: "J.R.R. Tolkien", pages: 295, reading: "Yes"},
    {id:2, title: "The Fellowship of the Ring", author: "J.R.R. Tolkien", pages: 398, reading: "Yes"},
    {id:3, title: "The Two Towers", author: "J.R.R. Tolkien", pages: 327, reading: "On going"},
    {id:4, title: "The Return of the King", author: "J.R.R. Tolkien", pages: 347, reading: "No"}
];


//dynamic rendering function
function book () {
    bookShelves.innerHTML= "";
    myBooks.forEach((book) => {
        const div = document.createElement('div');
        div.classList.add('book');
        div.innerHTML = `
            <h2>${book.title}</h2>
            <div id="p-wrapper">
            <p>${book.author}</p>
            <p>${book.pages} pages</p>
            <p>${book.reading}</p>
            </div>
            <button id="delete-button"> Delete book </button>
        `;
        bookShelves.appendChild(div);
    
    });
}
book();


//etape 1: add a book

let bookId = Number(localStorage.getItem('bookId')) || 5;
AddformElement.style.display = 'none';
addBookButtonElement.textContent = 'Add a book';

addBookButtonElement.addEventListener('click', () => {
    if (AddformElement.style.display === "none" || AddformElement.style.display === "") {
        AddformElement.style.display = 'block';
        addBookButtonElement.textContent = 'Hide the form';
    } else {
        AddformElement.style.display = 'none';
        addBookButtonElement.textContent = 'Add a Book';
    }
    console.log('click');
});

AddformElement.addEventListener('submit', (e) => {
    e.preventDefault();

    const form = e.target;

    const formData = {
        id: myBooks.length+1,
        title: form.title.value,
        author: form.author.value,
        pages: form.pages.value,
        reading: form.reading.value
    }

    myBooks.push(formData);

    localStorage.setItem('bookId',bookId);

    form.reset();
    console.log(myBooks);
    AddformElement.style.display="none"
    addBookButtonElement.textContent= "Add a book"
    
    book();
});


//etape 2: comment changer le status de lecture d un livre via une fonction

//etape 3: comment afficher les livres dans la console via une fonction







