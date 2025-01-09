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


//data
const myBooks = [ 
    {id:1,title: "The Hobbit", author: "J.R.R. Tolkien", pages: 295, reading: "Read"},
    {id:2, title: "The Fellowship of the Ring", author: "J.R.R. Tolkien", pages: 398, reading: "Read"},
    {id:3, title: "The Two Towers", author: "J.R.R. Tolkien", pages: 327, reading: "On going"},
    {id:4, title: "The Return of the King", author: "J.R.R. Tolkien", pages: 347, reading: "No"}
];


//dynamic rendering function
function renderBook () {
    bookShelves.innerHTML= "";
    myBooks.forEach((book,id) => {
        const bookDiv = document.createElement('div');
        bookDiv.classList.add('book');
        bookDiv.innerHTML = `
            <h2>${book.title}</h2>
            <div id="p-wrapper">
            <p>Author: ${book.author}</p>
            <p>Pages: ${book.pages} pages</p>
            <p>Reading status: ${book.reading}</p>
            </div>
        `;
        bookShelves.appendChild(bookDiv);

        const readingStatusButton = document.createElement('button')
        readingStatusButton.classList.add("reading-button")
        if (book.reading === 'Read') {
            readingStatusButton.style.display = "none";
        } else if (book.reading === 'On going' ) {
            readingStatusButton.textContent= "Pass to read"
        } else {
            readingStatusButton.textContent= " Pass to on going"
        }
        bookDiv.appendChild(readingStatusButton)

        const deleteButton = document.createElement('button');
        deleteButton.classList.add("delete-button");
        deleteButton.textContent= 'Remove';
        deleteButton.setAttribute('data-id', id)

        deleteButton.addEventListener('click', (e)=> {
            const bookIndex = e.target.getAttribute('data-id');
            myBooks.splice(bookIndex,1);
            renderBook();
        });
        bookDiv.appendChild(deleteButton);
    });
}
renderBook();


 //add a book function
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
    
    renderBook();
});









