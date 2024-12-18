//DOM Elements
const bookShelves = document.getElementById('book-shelves');
const AddformElement = document.getElementById('add-form');
const deleteFormElement = document.getElementById('delete-form');

//Add form elements
const titleInputElement = document.getElementById('title-input');
const authorInputElement = document.getElementById('author-input'); 
const pagesInputElement = document.getElementById('pages-input');
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
    {id:1,title: "The Hobbit", author: "J.R.R. Tolkien", pages: 295, read: "Yes"},
    {id:2, title: "The Fellowship of the Ring", author: "J.R.R. Tolkien", pages: 398, read: "Yes"},
    {id:3, title: "The Two Towers", author: "J.R.R. Tolkien", pages: 327, read: "On going"},
    {id:4, title: "The Return of the King", author: "J.R.R. Tolkien", pages: 347, read: "No"}
];

console.log(myBooks);

//dynamic rendering function
function book () {
    myBooks.forEach((book) => {
        const div = document.createElement('div');
        div.classList.add('book');
        div.innerHTML = `
            <h2>${book.title}</h2>
            <p>${book.author}</p>
            <p>${book.pages} pages</p>
            <p>${book.read}</p>
        `;
        bookShelves.appendChild(div);
    
    });
}

book();


//etape 1: add a book
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

submitButtonElement.addEventListener('click', (e) => {
    const AllfieldsValid = Array.from(AddformElement.elements).every((input) => {
        return input.type !== 'submit' && input.checkValidity();
    });

    if (AllfieldsValid) {
        AddformElement.style.display = 'none';
        addBookButtonElement.textContent = 'Add a Book';
        console.log('you can click on submit button');
    }  
});
    

//etape 2: delete book

deleteFormElement.style.display = 'none';
deleteBookButtonElement.textContent = 'Delete a book';

deleteBookButtonElement.addEventListener('click', () => {
    if (deleteFormElement.style.display === "none" || deleteFormElement.style.display === "") {
        deleteFormElement.style.display = 'block';
        deleteBookButtonElement.textContent = 'Hide the form';
    } else {
        deleteFormElement.style.display = 'none';
        deleteBookButtonElement.textContent = 'Delete a Book';
    }
    console.log('click');
});

deleteButtonElement.addEventListener('click', (e) => {
    const AllfieldsValid = Array.from(deleteFormElement.elements).every((input) => {
        return input.type !== 'submit' && input.checkValidity();
    });
    if (AllfieldsValid) {
    deleteFormElement.style.display = 'none';
    deleteBookButtonElement.textContent = 'Delete a Book';
    console.log('you did clicked on delete button');
    };
});

//etape 3: comment changer le status de lecture d un livre via une fonction

//etape 4: comment afficher les livres dans la console via une fonction







