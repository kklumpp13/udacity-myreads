import React from 'react';
import Book from './Book';
import PropTypes from 'prop-types';

const SearchGrid = ({books, updateShelf}) => {
  return (
    <ol className="books-grid">
      {books.map((book) => {
        return (
          <Book book={book} updateShelf={updateShelf} key={book.id} />
        )
      })}
    </ol>
  )
}

export default SearchGrid;

SearchGrid.propTypes = {
  books: PropTypes.array.isRequired,
  updateShelf: PropTypes.func.isRequired
}
