document.querySelector('#open_Form').addEventListener('click', openForm)
document.querySelector('#close_Form').addEventListener('click', closeForm)
document.querySelector('.submit').addEventListener('click', addBooktoLibrary)
let myLibrary =[]
let bookTitle = document.getElementById('book_Title')
let bookAuthor = document.getElementById('book_Author')
let bookPages = document.getElementById('book_Pages')
let checkRead = document.getElementById('check_Read')
let bookIndex = 1

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
    return new Book (bookTitle.value, bookAuthor.value, bookPages.value, checkRead.checked)
}

//Checks that input fields have been filled out before allowing submission
//Then displays a closeable card to the DOM with book object info
function addBooktoLibrary(){
    let book = createBookObj()
    let checkEmpty = (bookTitle.value && bookAuthor.value && bookPages.value)
    myLibrary.push(book)
    if(checkEmpty){
        let newBookElem = document.createElement('div')
        newBookElem.classList.add('book-container')
        newBookElem.setAttribute('id', `bookCard_${bookIndex}`)
        document.querySelector('.library-container').appendChild(newBookElem)
        let closeElem = document.createElement('button')
        let closeText = document.createTextNode('x')
        closeElem.appendChild(closeText)
        closeElem.className += 'close close-book close:hover'
        document.getElementById(`bookCard_${bookIndex}`).appendChild(closeElem)
        for(const prop in book){
            let propText = document.createTextNode(book[prop])
            let propElement = document.createElement('p')
            propElement.appendChild(propText)
            newBookElem.appendChild(propElement)
        }
        bookIndex++  
        clearFields()
    }
    else   
        alert('Must complete all fields!')
}

//clears the form fields and closes the book form
function clearFields(){
    bookTitle.value = ''
    bookAuthor.value = ''
    bookPages.value = ''
    checkRead.checked = false
    closeForm()
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




