
//User input form
const form = document.querySelector("#book-form")
form.addEventListener("submit", addBook)

function addBook(e){
    const book = bookInput.value;
    console.log(book);
    e.preventDefault();
}

//Book List
    bookList = document.querySelector("#book-list")
    bookList.addEventListener("click", delBook)

    //Page reload
    document.addEventListener("DOMContentLoaded", getBooks)

// getBooks
    function getBooks(){
        //get data from local storage
        let books
        if(localStorage.getItem("books") === null){
            books = []
        } else {
            books = JSON.parse(localStorage.getItem("books"))
        }
        const tr = document.createElement("tr")
        const trContent =`
 
    <td>${title}</td>
    <td>${author}</td>
    <td>${isbn}</td>
    <td><a href="#">X</a></td>`

        tr.innerHTML = trContent

        bookList = document.querySelector("#book-list")
        console.log(trContent)
        bookList.appendChild(tr)
        })
    }

    //delBook
    function delBook(event){
        if(event.target.textContent === "x"){
            if(confirm("Do you really want to delete this book?")){
                let isbn = event.target.parentElement.previousElementSibling.textContent
                let author = event.target.parentElement.previousElementSibling.previousElementSibling.textContent
                let title = event.target.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.textContent
                const book = [title, author, isbn]
                event.target.parentElement.parentElement.remove()
                removeBook(book)
            }
        }
    }

    //removeBook)
    function removeBook(book){
        let books
        if(localStorage.getItem("books") === null){
            books = []
        } else {
            books = JSON.parse(localStorage.getItem("books"))
        }
        books.forEach(function(bookFormLS, bookIndex){
            if(bookFromLS[0] === book[0] && bookFromLS[1] === book[1] && bookFromLS[2] === book[2]){
                books.splice(taskIndex, 1)
            }
        })
        localStorage.setItem("books", JSON.stringify(books))
    }

//addBook function
function addBook(event){
//get form submit value from form input
    const title = document.querySelector("#title").value
    const author = document.querySelector("#author").value
    const isbn = document.querySelector("#isbn").value

    //create tr DOM element
    const tr = document.createElement("tr")
    const trContent =`
 
    <td>${title}</td>
    <td>${author}</td>
    <td>${isbn}</td>
    <td><a href="#">X</a></td>`

    tr.innerHTML = trContent
    bookList.appendChild(tr)
    //Save to LS
    const book = [title, author, isbn]
    saveBook(book)

    // clear form input value
    document.querySelector("#title").value = ""
    document.querySelector("#author").value = ""
    document.querySelector("#isbn").value = ""
    event.preventDefault()
}

    //saveBook
    function saveBook(book){
        let books
        if(localStorage.getItem("books") === null){
            books = []
        } else {
            books = JSON.parse(localStorage.getItem("books"))
        }
        books.push(book)
        console.log(books)
        localStorage.setItem("books", JSON.stringify(books))
    }

