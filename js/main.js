document.querySelector('#open_Form').addEventListener('click', openForm)
document.querySelector('#close_Form').addEventListener('click', closeForm)
document.querySelector('.submit').addEventListener('click', createBookCard)
let myLibrary =[]

let bookTitle = document.getElementById('book_Title')
let bookAuthor = document.getElementById('book_Author')
let bookPages = document.getElementById('book_Pages')
let checkRead = document.getElementById('check_Read')

class Book{
    constructor(title, author, pages, read){
        this.title = title
        this.author = author
        this.pages = pages
        this.read = read
    }
}

//Checks that input fields have been filled out before allowing submission
//Then displays a closeable card to the DOM with book object info
function createBookCard(){
    let formComplete = (bookTitle.value && bookAuthor.value && bookPages.value)
    if(formComplete){
        let book = new Book (bookTitle.value, bookAuthor.value, bookPages.value, checkRead.checked)
        myLibrary.push(book)
        let bookIndex = myLibrary.indexOf(book)
        let newBookElem = document.createElement('div')
        newBookElem.classList.add('book-container')
        newBookElem.setAttribute('id', `bookCard_${bookIndex}`)
        document.querySelector('.library-container').appendChild(newBookElem)
        createCloseButton(`bookCard_${bookIndex}`)
        for(const prop in book){
            let propElement = document.createElement('p')
            propElement.innerHTML = `${capitalize(prop)}: ${book[prop]}`
            newBookElem.appendChild(propElement)
        }
        checkReadStatus(book, `bookCard_${bookIndex}`)
        createReadButtons(book, `bookCard_${bookIndex}`)
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

function createCloseButton(id){
    let closeElem = document.createElement('button')
    closeElem.innerHTML = 'x'
    closeElem.className += 'close close-book close:hover'
    document.getElementById(id).appendChild(closeElem)
    closeElem.addEventListener('click', removeBookCard)
}

function removeBookCard(e){
    e.target.parentElement.classList.add('close-book-animation')
    Promise.all(
    e.target.parentElement.getAnimations().map(animation => animation.finished))
        .then(() => e.target.parentElement.remove())

    // let index = e.parentElement.id.slice(-1)
    // myLibrary.splice(index, 1)
    // this.parentElement.remove()
    // let bookArr = document.querySelectorAll('.book-container')
    // for(let i = 0; i<bookArr.length; i++){
    //     bookArr[i].setAttribute('id', `bookCard_${i}`)
    // }
}

function checkReadStatus(book, bookID){
   let bookEl = document.getElementById(bookID)
   book.read ? bookEl.classList.add('read') : bookEl.classList.add('not-read')
}

function createReadButtons(book, bookID){
    let bookEl = document.getElementById(bookID)
    let readButton = document.createElement('button')
    readButton.classList.add('read-button')
    readButton.innerHTML = 'Toggle Read'
    bookEl.appendChild(readButton)
    readButton.addEventListener('click', function(){
        book.read = !book.read
        console.log(book.read)
    })
    
}

function capitalize(str){
    return str[0].toUpperCase() + str.slice(1)
}