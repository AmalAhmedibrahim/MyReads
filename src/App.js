import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route } from 'react-router-dom'
import ListBooks from './listBooks'
import SearchBooks from './searchBooks'

class BooksApp extends React.Component {
  state = {
   books:[]
  }

 async componentDidMount(){
   this.getAllBooks()
  }

  async getAllBooks(){
   let books = await BooksAPI.getAll();
   this.setState({
     books
   });
  }
  updateBookShelf(book,shelf){
    debugger;
    BooksAPI.update(book, shelf).then(res => {
      debugger;
      this.getAllBooks();
    });
  }
  render() {
    return (
      <div className="app">
      <Route exact path='/' >
          <ListBooks books={this.state.books} updateBookShelf={this.updateBookShelf.bind(this)} />
          </Route>

        <Route path='/search' >
          <SearchBooks updateBookShelf={this.updateBookShelf.bind(this)} allBooks={this.state.books} />
        </Route>
      </div>
    )
  }
}

export default BooksApp
