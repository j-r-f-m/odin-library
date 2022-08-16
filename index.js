// console.log('hello world')

// function Book(title, author, pages, read_status) {
//     this.title = title;
//     this.author = author;
//     this.pages = pages;
//     this.read_status = read_status;
//     this.info = function() {
//        return console.log(`${title} by ${author}, ${pages}, ${read_status}`)
//     }
// }   

// const theHobbit = new Book('The Hobbit', 'J.R.R Tolkien', '295 pages', 'not read yet')
// console.log(theHobbit.info())

function Student() {
}


Student.prototype.sayName = function() {
  console.log(this.name)
}

function EighthGrader(name) {
  this.name = name
  this.grade = 8
}

EighthGrader.prototype = Object.create(Student.prototype)

const carl = new EighthGrader("carl")
carl.sayName() // console.logs "carl"
carl.grade // 8