import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from "./BooksAPI";
import Book from './book'

class SearchBooks extends Component {
  state = {
    books: [],
    searchText: ''
  }
  handleChange = event => {
    event.preventDefault();

    this.setState({
      searchText: event.target.value
    });
    console.log(this.getBooks());
  }

  async getBooks() {
    if (this.state.searchText !== "") {

      await BooksAPI.search(this.state.searchText).then((books) => {
        debugger;

        if (books.error) {
          this.setState({
            books: []
          });
        }else{

          this.setState({
            books
          });
          this.setBooksSehlf();
          console.log(books);
        }
      });
    }

  }
  setBooksSehlf(){
    debugger;
    let updatedBooks = this.state.books.map(b=>{
      debugger;
      this.props.allBooks.forEach(book => {
        debugger;
        if (b.id === book.id) {
          b.shelf = book.shelf;
        }else{
          b.shelf = "none";
        }
      });
      return b;

    });
    this.setState({books:updatedBooks})
  }
  updateBookShelf(book, shelf) {
    debugger;
    let myBooks = this.state.books;
    const changeBook = myBooks.filter(t => t.id === book.id)[0];
    changeBook.shelf = shelf;
    this.setState({
      books: myBooks
    });
    this.props.updateBookShelf(book, shelf);
  }
  render() {
    return (<div className="search-books">
      <div className="search-books-bar">
        <Link to='/' className="close-search"></Link>

        <div className="search-books-input-wrapper">
          <input type="text" placeholder="Search by title or author" onChange={this.handleChange} />

        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {this.state.books.length > 0 && this.state.searchText !== "" ? this.state.books.map((book) => (
            <Book updateBookShelf={this.updateBookShelf.bind(this)} book={book} />)) : ''}
        </ol>
      </div>
    </div>
    )
  }
}

export default SearchBooks