import React, { Component } from 'react';

class ListBooks extends Component {
  render() {
    return (
      <div className="list-books">
        <h1>ListBooks is working</h1>
        <ol className="books-grid">
          {this.props.books.map(function(book) {
            return (
              <li>
                <div className="book">
                  <div className="book-top">
                    <div className="book-cover" style={{backgroundImage: `url(${book.imageLinks.smallThumbnail})`}}/>
                    <div className="book-shelf-changer"></div>
                  </div>
                  <div className="book-title">{book.title}</div>
                  <div className="book-authors">{book.authors.map(function(author) {
                    return author
                  })}</div>
                </div>
              </li>

            )
          })}
        </ol>
      </div>
    )
  }
}

export default ListBooks;

//How to do multiple maps - wasn't there a way to do it all in one place?
