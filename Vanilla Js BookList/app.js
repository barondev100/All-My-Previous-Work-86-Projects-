// Book Class: Represents a Book
class Book{
    constructor(title,author,isbn){
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

// Ui CLass: Handle Ui Task
class UI{
    static displayBooks(){
   
            const books = Store.getBooks();
    }
    static addBookToList(book){
        const list = document.querySelector("#book-list");
        const row = document.createElement('tr');

        row.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.isbn}</td>
            <td><i href='#' class="far fa-trash-alt btn btn-danger btn-sm delete"></i></td>
        `;

        list.append(row);
    }
    static clearFields(){
        document.querySelector('#title').value = "";
        document.querySelector('#author').value = "";
        document.querySelector('#isbn').value = "";
    }
    static showAlert(message, className){
        const div = document.createElement("div");
        div.className = `alert alert-${className}`;
        div.appendChild(document.createTextNode(message));
        const container = document.querySelector('.container');
        const form = document.querySelector("#book-form");
        container.insertBefore(div, form);

        // 1.5 second interval 
        setTimeout(()=>{
            document.querySelector('.alert').remove();
        },1500);
    }
    static deleteBook(el){
        if(el.classList.contains('delete')){
            el.parentElement.parentElement.remove();
        }
    }
}

// Store Class: Storage
class Store {
    static getBooks() {
      let books;
      if(localStorage.getItem('books') === null) {
        books = [];
      } else {
        books = JSON.parse(localStorage.getItem('books'));
      }
  
      return books;
    }
  
    static addBook(book) {
      const books = Store.getBooks();
      books.push(book);
      localStorage.setItem('books', JSON.stringify(books));
    }
  
    static removeBook(isbn) {
      const books = Store.getBooks();
  
      books.forEach((book, index) => {
        if(book.isbn === isbn) {
          books.splice(index, 1);
        }
      });
  
      localStorage.setItem('books', JSON.stringify(books));
    }
  }
  

// Event: Display Books
document.addEventListener("DOMContentLoaded", UI.displayBooks);

// Event: Add A Book
document.querySelector("#book-form").addEventListener("submit",(e)=>{
    //Get Form Values
    e.preventDefault();
    const title = document.querySelector("#title").value;
    const author = document.querySelector("#author").value;
    const isbn = document.querySelector("#isbn").value;
    // Validate
    if(title === '' || author === "" || isbn === ""){
       UI.showAlert("Fill Out Everything!", "danger");
    }else{
          // Instantiate Book
    const book = new Book(title, author,isbn);

    UI.addBookToList(book);

    // Add Book To Store
    Store.addBook(book);
    
    UI.showAlert("Thank For Filling Out Everything!", "success");
 //    CLear Fields
    UI.clearFields();
    }
  
})


// Event Remove A Book
document.querySelector("#book-list").addEventListener("click",(e)=>{
    UI.deleteBook(e.target);

    // Remove Book From Store
    Store.removeBook(e.target.parentElement.previousElementSibling.textContent);
    UI.showAlert("Book Removed", "info");
});