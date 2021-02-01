document.querySelector('#open_Form').addEventListener('click', openForm)
document.querySelector('#close_Form').addEventListener('click', closeForm)
document.querySelector('.submit').addEventListener('click', addBooktoLibrary)
let myLibrary =[]

class Book{
    constructor(title, author, pages, read){
        this.title = title
        this.author = author
        this.pages = pages
        this.read = read
    }
}

//Brings up window to input new book details
//need to add an enter key with event listener to store inputs into vars
function createBook(){
    let bookForm = document.createElement('div')
    bookForm.classList.add('book-form-container')
}

function displayLibrary(){
    myLibrary.forEach(book => {
        for(const property in book){
            console.log(`${property}: ${book[property]}`)
        }
    })
}

function createBookObj(){
    return new Book (document.getElementById('book_Title').value, document.getElementbyId('book_Author').value, document.getElementbyId('book_Pages').value, document.getElementbyId('check_Read').value )
}
//After filling out new book details, a new block with  book info is displayed to the DOM under class '.book-container'
function addBooktoLibrary(book){
    myLibrary.push(book)
    let newBookElem = document.createElement('div')
    newBookElem.classList.add('book-container')
    document.querySelector('.library-container').appendChild(newBookElem)
    for(const prop in book){
        let propText = document.createTextNode(book[prop])
        let propElement = document.createElement('p')
        propElement.appendChild(propText)
        newBookElem.appendChild(propElement)
    }  
}

function openForm(){
    document.getElementById('book_Form').style.display = "block"
}

function closeForm(){
    document.getElementById('book_Form').style.display = "none"   
}



//TESTING

LordoftheRings = new Book('Fellowship of the Rings', 'J.R.R Tolkien', 1000, true)
oldMan = new Book('The Old Man and the Sea', 'Ernest Hemingway', 300, false)

addBooktoLibrary(oldMan)
addBooktoLibrary(LordoftheRings)
addBooktoLibrary(LordoftheRings)
addBooktoLibrary(LordoftheRings)
addBooktoLibrary(LordoftheRings)

