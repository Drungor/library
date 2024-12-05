const bookShelves = document.getElementById('book-shelves');
const formElement = document.getElementById('form');
const deleteFormElement = document.getElementById('delete-form');

const deleteBookButtonElement = document.getElementById('delete-book-button');
const addBookButtonElement = document.getElementById('add-book-button');
const submitButtonElement = document.getElementById('submit-button');

const myBooks = [ 
    {id:1,title: "The Hobbit", author: "J.R.R. Tolkien", pages: 295, read: "Yes"},
    {id:2, title: "The Fellowship of the Ring", author: "J.R.R. Tolkien", pages: 398, read: "Yes"},
    {id:3, title: "The Two Towers", author: "J.R.R. Tolkien", pages: 327, read: "On going"},
    {id:4, title: "The Return of the King", author: "J.R.R. Tolkien", pages: 347, read: "No"}
];

console.log(myBooks);

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


// etape 1: comment ajouter un livre a l array via une fonction
// il faut rajouter un event listener sur le bouton addBookButton puis quand il est clique faire apparaitre une div qui 
// contient un from permettant de renseigner les informations a propos du livre a ajouter

addBookButtonElement.textContent = 'Add a book';

addBookButtonElement.addEventListener('click', () => {
    if (formElement.style.display === "none" || formElement.style.display === "") {
        formElement.style.display = 'block';
        addBookButtonElement.textContent = 'Hide the form';
    } else {
        formElement.style.display = 'none';
        addBookButtonElement.textContent = 'Add a Book';
    }
    console.log('click');
});

submitButtonElement.addEventListener('click', (e) => {
    
    form.style.display = 'none';
    console.log('you did clicked on submit button');
});
    

//etape 2: comment supprimer un livre de l array via une fonction

deleteFormElement
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

//etape 3: comment changer le status de lecture d un livre via une fonction

//etape 4: comment afficher les livres dans la console via une fonction







