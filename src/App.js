import React from 'react';
import { Link, Route } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import './App.css';
import ListBooks from './components/ListBooks.js';
import SearchGrid from './components/SearchGrid.js';

class BooksApp extends React.Component {
  state = {
     books: [],
     booksQuery: [],
  }

  updateShelf = (shelf, book) => {
    BooksAPI.update(book, shelf).then((response) => {
      BooksAPI.getAll().then((books) => {
        this.setState({books})
      })
    })
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({books})
    });
  }

  searchBooks = (event) => {
    let query = event.target.value;

    BooksAPI.search(query, 20).then((books) => {

      let userBooks = this.state.books;

      const updatedShelves = books.map(book => {
        let existingBooks = userBooks.filter(userBook => {
          return book.id === userBook.id;
        });

        let updatedShelf = existingBooks.length && existingBooks[0].shelf;

        if (updatedShelf) {
          return {...book, ...{shelf: updatedShelf}};
        } else {
          return book
        }
      });

      this.setState({booksQuery: updatedShelves})
    });
  }

  render() {
    return (
      <div className="app">
        <Route path="/" exact render={() => (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>

            <div className="list-books-content">
              <div>
                <ListBooks
                  updateShelf={this.updateShelf}
                  books={this.state.books}
                  title="Currently Reading"
                  shelf="currentlyReading"/>
                <ListBooks
                  updateShelf={this.updateShelf}
                  books={this.state.books}
                  title="Want to Read"
                  shelf="wantToRead"/>
                <ListBooks
                  updateShelf={this.updateShelf}
                  books={this.state.books}
                  title="Read"
                  shelf="read"/>
              </div>
            </div>
            <div className="open-search">
              <Link to="/search">Add a book</Link>
            </div>
          </div>
        )} />
        <Route path="/search" exact render={() => (
          <div className="search-books">
            <div className="search-books-bar">
              <Link className="close-search" to="/">Close</Link>
              <div className="search-books-input-wrapper">
                <input type="text" placeholder="Search by title or author" onChange={this.searchBooks}/>
              </div>
            </div>
            <div className="search-books-results">
              {this.state.booksQuery.length > 0 && (
                <SearchGrid
                  books={this.state.booksQuery}
                  updateShelf={this.updateShelf}
                />
              )}
            </div>
          </div>
        )} />
      </div>
    )
  }
}

export default BooksApp
