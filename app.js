

const form = document.querySelector("form")
form.addEventListener("submit", addBook)

// getBooks
function getBooks(){
    //get data from local storage
    let books
    if(localStorage.getItem("books") === null){
        books = []
    } else {
        books = JSON.parse(localStorage.getItem("books"))
    }

//addBook function
function addBook(event){

    const book = document.querySelector("#book").value

    const bookList = document.querySelector("ul");

    const li = document.createElement("li")
    // add css class
    li.className = "collection-item"
    // add text to element
    const text = document.createTextNode(book)
    li.appendChild(text)
    // create link
    const link = document.createElement("a")
    // add css style
    link.className = "secondary-content"
    // add text
    link.appendChild(document.createTextNode("x"))
    // add href attribute
    link.setAttribute("href", "#")
    // add link to list items
    li.appendChild(link)
    // add li to bookList
    bookList.appendChild(li)
    // save book to localStorage
    bookStorage(book)
    // clear form input value
    document.querySelector("#book").value = ""
    event.preventDefault()
}

//delBook
function delBook(event){
    if(event.target.textContent === "x"){
        if(confirm("Do you really want to delete this book?")){
            event.target.parentElement.remove()
            let book = event.target.parentElement.textContent.slice(0, -1)
            removeStorage(book)
        }
    }
}