import React from 'react';
import Book from './Book';
import PropTypes from 'prop-types';

const ListBooks = ({ shelf, books, title, updateShelf }) => {

  let filteredBooks = books.filter((book) => {
    return book.shelf === shelf;
  });

  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
        {filteredBooks.map((book) => {
          return (
            <Book book={book} updateShelf={updateShelf} key={book.id} />
          )
        })}
        </ol>
      </div>
    </div>
  )
}

export default ListBooks;

ListBooks.propTypes = {
  books: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  shelf: PropTypes.string.isRequired,
  updateShelf: PropTypes.func.isRequired
}
