import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import BookShelf from './bookShelf'

class ListBooks extends Component {
  state= {
    shelves : [
      {id:'currentlyReading',name:"Currently Reading"},
      {id:'read',name:"Read"},
      {id:'wantToRead',name:"Want to Read"},
      
     ],
  }
  
  updateBookShelf(book,shelf){
    debugger;
    this.props.updateBookShelf(book,shelf);
  }
    render(){
        return (<div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            {this.state.shelves.map((shelf)=>(
              <BookShelf books={this.props.books.filter(b=>b.shelf===shelf.id)}
              shelfName={shelf.name}  updateBookShelf={this.updateBookShelf.bind(this)}
              />
            ))}
          </div>
        </div>
        
        <div className="open-search">
        <Link
            to='/search'
            className="open-search-button">
            </Link>
        </div>
      </div>
    )
    }
}

export default ListBooks