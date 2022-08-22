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

function logCurrBook(book) {
  // testing function logs status of current book
  console.log('book:')
  console.log(book);

}

function createBook() {
  /* function to save information */

  const inputTitle = document.getElementById('title').value;
  const inputAuthor = document.getElementById('author').value;
  const inputPages = document.getElementById('pages').value;
  const readStatus = document.querySelector('#readStatus').checked;
  // form validation
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
  // create new book object
  const currentBook = new Book(
    `${inputTitle}`, `${inputAuthor}`, `${inputPages}`, readStatus
    )
  // TESTING
  logCurrBook(currentBook);
  // push created book into global book array
  bookArray.push(currentBook);
  // create dom elements for books
  showBooks(bookArray);
  // clear input fields after user creates book
  clearInputFields()
  hideForm();
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
  // if you click on the "book read" button this functions changes the status
  // of the corresponding book object to "book not read" (false)
  // it also changes the status button from book read to book not read

  // get class name of clicked button 
  const classOfBtn = e.target.className;
  // the last char of the class name corresponds to the position of the clicked 
  // on book object in the array, access last char of class in oder to acces the
  // book object in the array
  const idxOfCurrBtn = classOfBtn.charAt(classOfBtn.length-1); 
  // change read status of book
  bookArray[idxOfCurrBtn].readStatus = false;
  //TESTING
  logCurrBook(bookArray[idxOfCurrBtn]);
  
  // create status button, the status of the current book object has changed
  // the button must reflect that change, the button gets changed from "book-read"
  // to "book not read"
  const readStatusBtn = document.createElement('button');
  readStatusBtn.setAttribute('type', 'button');
  readStatusBtn.classList.add(`book-not-read-${idxOfCurrBtn}`);
  readStatusBtn.textContent = 'Not Read';

  readStatusBtn.addEventListener('click', bookRead);
  
  // select book-read button to replace it with book not read button
  const bookReadBtn = document.querySelector(`.book-read-${idxOfCurrBtn}`);
  

  bookReadBtn.parentNode.replaceChild(readStatusBtn, bookReadBtn);

}



function bookRead(e) {
  // if you click on the "book not read" button this functions changes the status
  // of the corresponding book object to "book read" (true)
  // it also changes the status button from book not read to book rea
  
  // get class name of clicked button 
  const classOfBtn = e.target.className;
  // the last char of the class name corresponds to the position of the clicked 
  // on book object in the array, access last char of class in oder to acces the
  // book object in the array
  const idxOfCurrBtn = classOfBtn.charAt(classOfBtn.length-1); 

  // change read status of current book
  bookArray[idxOfCurrBtn].readStatus = true;
  //test
  console.log("changed status from 'not read' to 'not read'");
  console.log(bookArray[idxOfCurrBtn])
  
  // create status button, the status of the current book object has changed
  // the button must reflect that change, the button gets changed from "book-read"
  // to "book not read"
  const readStatusBtn = document.createElement('button');
  readStatusBtn.setAttribute('type', 'button');
  readStatusBtn.classList.add(`book-read-${idxOfCurrBtn}`);
  readStatusBtn.textContent = 'Read';

  readStatusBtn.addEventListener('click', bookNotRead);
  
  // select book-not-read button to replace it with book read button
  const bookNotReadBtn = document.querySelector(`.book-not-read-${idxOfCurrBtn}`);

  

  bookNotReadBtn.parentNode.replaceChild(readStatusBtn, bookNotReadBtn);

}








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
    
    // set book read status to true or false depending on the check box
    if (bookArray[i].readStatus) {
      // true - if book is read create book read button
      
      readStatusBtn.classList.add(`book-read-${i}`);
      readStatusBtn.textContent = 'Read';
      /* if book is read 
      and user clicks on book-read button the state of the book
      will change to book not read */
      readStatusBtn.addEventListener('click', bookNotRead)
    } else {
      // false - if book is not read
      readStatusBtn.classList.add(`book-not-read-${i}`);
      readStatusBtn.textContent = 'Not Read';
      readStatusBtn.addEventListener('click', bookRead)
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


// ---------------------------- GLobal Code ---------------------------

/* array containing books */
let bookArray = [];

// ---------------------------- buttons -------------------------------
// selcet buttons
const btnAddBook = document.querySelector('#button-add');
btnAddBook.addEventListener('click', showForm);  

const btnCloseForm = document.querySelector('.cancel');
btnCloseForm.addEventListener('click', hideForm);

// create book
const btnSubmitInfo = document.querySelector('.submit');
btnSubmitInfo.addEventListener('click', createBook);