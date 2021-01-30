document.querySelector('#add_book').addEventListener('click', createBook)
document.querySelector
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

}


function displayLibrary(){
    myLibrary.forEach(book => {
        for(const property in book){
            console.log(`${property}: ${book[property]}`)
        }
    })
}

//After filling out new book details, a new block with  book info is displayed to the DOM under class '.book-container'
function addBooktoLibrary(book){
    myLibrary.push(book)
    let newBook = document.createElement('div')
    newBook.classList.add('book-container')
    document.querySelector('.library-container').appendChild(newBook)
    for(const prop in book){
        let propText = document.createTextNode(book[prop])
        console.log(propText)
        let propElement = document.createElement('p')
        propElement.appendChild(propText)
        newBook.appendChild(propElement)
    }

  
    // titleNode.appendChild(titleTxt)
    // authorNode.appendChild(authorTxt)
    // authorNode.appendChild(authorTxt)
    

}










//TESTING

LordoftheRings = new Book('Fellowship of the Rings', 'J.R.R Tolkien', 1000, true)
oldMan = new Book('The Old Man and the Sea', 'Ernest Hemingway', 300, false)

addBooktoLibrary(oldMan)
addBooktoLibrary(LordoftheRings)

