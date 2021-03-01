import React, { Component } from 'react';
import BookShelfChanger from "./bookShelfChanger"
class Book extends Component {

  onShelfChange(book,shelf){
    debugger;
    this.props.updateBookShelf(book,shelf);
  }
    render(){
        return (<div className="book">
        <div className="book-top">
          <div className="book-cover" 
          style={{ width: 128, height: 188, backgroundImage: `url('${this.props.book.imageLinks? this.props.book.imageLinks.thumbnail:"http://via.placeholder.com/128x193?text=No%20Cover" } ')` }}></div>
         <BookShelfChanger
          onShelfChange= {this.onShelfChange.bind(this)}
          bookShelf={this.props.book.shelf}
          book={this.props.book}
         ></BookShelfChanger>
        </div>
        <div className="book-title">{this.props.book.title}</div>
        <div className="book-authors">{this.props.book.authors}</div>
      </div>
)
    }
}

export default Book