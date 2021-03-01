import React, { Component } from 'react';
import Book from './book'

class BookShelf extends Component {
    
    render(){
      debugger;
        return (
         
        <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.shelfName|| 'none'}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
          {this.props.books.map((book)=>(
            <Book
            book={book}
            updateBookShelf={this.props.updateBookShelf}
            />))}
          </ol>
        </div>
      </div>)

    }
}

export default BookShelf