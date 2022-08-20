/* create new book objects */
function Book(title, author, pages, read_status) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.readStatus = read_status;
  this.info = function() {
    return console.log(`${title} by ${author}, ${pages}, ${read_status}`)
  }
}   

  

/* test books */
const theHobbit = new Book('The Hobbit', 'J.R.R Tolkien', '295 pages', 'not read yet');
const leviathanRising = new Book('Leviathan Rising', 'James R. Corey', '800 pages', 'read');
const cibolaBurn = new Book('Cibola Burn', 'James R. Corey', '893 pages', 'not yet read');

/* array containing books */
let bookArray = [theHobbit, leviathanRising, cibolaBurn];


/* button click */
function showForm(test) {
  console.log('lol');
  document.getElementById('add-book-form').style.display = 'block';
  /* document.getElementById('add-book-form').style.flexDirection = 'column'; */
  document.getElementById('button-add').style.display = 'none';

}

const btn = document.querySelector('#button-add')
console.log(btn);
btn.addEventListener('click', showForm);  


function showBooks(booksArr) {
  /* function that creates cards for books in dom */

  /* select card container in order to add to it */
  const cardContainer = document.querySelector('.card-container');
  // iteratr over array and readt book objects
  for (i in booksArr) {
    console.log(bookArray[i].info());
    console.log('lol');

    /* create new book card */
    const newCard = document.createElement('div');
    newCard.classList.add('card-book');
    cardContainer.appendChild(newCard);

    /* create title for book card*/
    const bookTitle = document.createElement('h1');
    bookTitle.classList.add('book-title');
    bookTitle.textContent = bookArray[i].title;
    newCard.appendChild(bookTitle);

    /* create author for book */
    const bookAuthor = document.createElement('p');
    bookAuthor.classList.add('book-author');
    bookAuthor.textContent = bookArray[i].author;
    newCard.appendChild(bookAuthor);

    /* create pages for book */
    const bookPages = document.createElement('p');
    bookPages.classList.add('book-pages');
    bookPages.textContent = bookArray[i].pages;
    newCard.appendChild(bookPages);

    /* create read status for book */
    const readStatus = document.createElement('p');
    readStatus.classList.add('read-status');
    readStatus.textContent = bookArray[i].readStatus;
    newCard.appendChild(readStatus);
  }
}

showBooks(bookArray)



