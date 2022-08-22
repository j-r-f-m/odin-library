/* create new book objects */
function Book(title, author, pages, readStatus) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.readStatus = readStatus;
  this.info = function() {
    /* function that show general info */
    return console.log(`${title} by ${author}, ${pages}, ${readStatus}`)
  }
}   

  

/* test books */
/* const theHobbit = new Book('The Hobbit', 'J.R.R Tolkien', '295 pages', 'not read yet');
const leviathanRising = new Book('Leviathan Rising', 'James R. Corey', '800 pages', 'read');
const cibolaBurn = new Book('Cibola Burn', 'James R. Corey', '893 pages', 'not yet read'); */

/* array containing books */
let bookArray = [];

// -----------------------------  buttons functions -------------------------------------
function showForm() {
  /* fucntion that shows "the add book form and hides the button" */
  // hide form so user can add a book to the library
  document.getElementById('add-book-form').style.display = 'block';
  // hide button so user can not click button accidentially
  document.getElementById('button-add').style.display = 'none';

}

function hideForm() {
  /* function to hide from and show button */
  
  // dispaly form so user can add a book to the library
  document.getElementById('add-book-form').style.display = 'none';
  // display button so user not click accidentially
  document.getElementById('button-add').style.display = 'block';
  clearInputFields();
}

function clearInputFields() {
    /* clear input fields in order to make next entry possible, if input fields are 
  not cleared you have to clear them manually */
  document.getElementById('title').value = '';
  document.getElementById('author').value = '';
  document.getElementById('pages').value = '';
  document.getElementById('readStatus').checked = false;
}

function deleteBook(e) {
  //delete book from library
  //console.log('delete-btn');
  let classOfBtn = e.target.className;
  //console.log(classOfBtn);
  bookArray.splice(classOfBtn, 1);
  showBooks(bookArray);
}

function bookNotRead(e) {
  const classOfBtn = e.target.className;
  const idxOfCurrBtn = classOfBtn.splice(-1);
  console.log(classOfBtn);
  console.log(typeof(classOfBtn));
  console.log(idxOfCurrBtn);
  /* bookArray[classOfBtn.charAt(-1)].readStatus = false; */
  console.log(bookArray[classOfBtn-1]);
  
}

function submitInfo() {
  /* function to save information */

  // get book information
  const inputTitle = document.getElementById('title').value;
  const inputAuthor = document.getElementById('author').value;
  const inputPages = document.getElementById('pages').value;
  const readStatus = document.querySelector('#readStatus').checked;
  //console.log(readStatus);


  // test
/*   console.log(inputTitle);
  console.log(inputAuthor);
  console.log(inputPages);
  console.log(readStatus); */

  // check if inputs have a value - if input is empty nothing happens
  /* I had to add the following code in order to make the from validation with
     "required" work */
  if (inputTitle === '') {
    
    return
  } else if (inputAuthor === '') {
    
    return
  } else if (inputPages === '') {
    
    return
  } else if (readStatus === '') {
    
    return
  }
  const currentBook = new Book(
    `${inputTitle}`, `${inputAuthor}`, `${inputPages}`, readStatus
    )

  // test
  console.log(currentBook);
  bookArray.push(currentBook);
  // test 
  /* console.log(bookArray);
  console.log(currentBook.title); */
 /*  showBooks(bookArray); */
  /* addBook(currentBook.title, currentBook.author, currentBook.pages, currentBook.readStatus); */
  showBooks(bookArray);
  clearInputFields()
  hideForm();
  
}



// ---------------------------- buttons -------------------------------
// selcet buttons
const btnAddBook = document.querySelector('#button-add');
console.log(btnAddBook);
btnAddBook.addEventListener('click', showForm);  

const btnCloseForm = document.querySelector('.cancel');
btnCloseForm.addEventListener('click', hideForm);

// get value of form inputs
const btnSubmitInfo = document.querySelector('.submit');
btnSubmitInfo.addEventListener('click', submitInfo);

// book read
/* const btnBookRead = document.querySelector('.book-read');
btnBookRead.addEventListener('click', bookNotRead); */


// ------------------------------- manage boooks -----------------------
function showBooks(booksArr) {
  /* function that creates cards for books in dom */

  /* select card container in order to add to it */
  const cardContainer = document.querySelector('.card-container');
  /* delete all child nodes of the "card-container" div in order to prevent double
  entries in the library*/
  cardContainer.innerHTML = "";

  // iteratr over array and readt book objects
  for (i in booksArr) {
    /* console.log(i); */
    /* console.log(bookArray[i].info());
    console.log('lol'); */

    /* create new book card */
    const newCard = document.createElement('div');
    newCard.classList.add('card-book')
    newCard.classList.add(`card-book-${i}`);
    cardContainer.appendChild(newCard);

    /* create title for book card*/
    const bookTitle = document.createElement('h1');
    bookTitle.classList.add('book-title');
    bookTitle.textContent = 'Title: ' + bookArray[i].title;
    newCard.appendChild(bookTitle);

    /* create author for book */
    const bookAuthor = document.createElement('p');
    bookAuthor.classList.add('book-author');
    bookAuthor.textContent = 'Author: ' + bookArray[i].author;
    newCard.appendChild(bookAuthor);

    /* create pages for book */
    const bookPages = document.createElement('p');
    bookPages.classList.add('book-pages');
    bookPages.textContent = 'Pages: ' +  bookArray[i].pages;
    newCard.appendChild(bookPages);

    /* buttons that change the read status of the book */
    const readStatusBtn = document.createElement('button');
    readStatusBtn.setAttribute('type', 'button');
    
    if (bookArray[i].readStatus) {
      console.log('ture');
      readStatusBtn.classList.add(`book-read-${i}`);
      readStatusBtn.textContent = 'Book-Read';
      /* if book is read and user clicks on book-read button the state of the book
      will change to book not read */
      readStatusBtn.addEventListener('click', bookNotRead)
    } else {
      readStatusBtn.classList.add('book-not-read');
      readStatusBtn.textContent = 'Book-not-Read';
    }
    
    newCard.appendChild(readStatusBtn);

    /* delete button */
    const deleteBtn = document.createElement('button');
    deleteBtn.setAttribute('type', 'button');
    deleteBtn.classList.add(`${i}`);
    deleteBtn.textContent = 'Delete';
    /* add eventlistener to button in order to be able to add function*/
    deleteBtn.addEventListener('click', deleteBook);
    newCard.appendChild(deleteBtn);

    

  }
}

/* showBooks(bookArray) */



