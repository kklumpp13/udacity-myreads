import React from 'react';
import SelectShelf from './SelectShelf';
import PropTypes from 'prop-types';

const Book = ({book, updateShelf}) => {
  return (
    <li>
      <div className="book">
        <div className="book-top">
          {book.imageLinks.smallThumbnail && (
            <div className="book-cover" style={{width: 128, height: 193, backgroundImage: `url(${book.imageLinks.smallThumbnail})`}}/>
          )}
          <div className="book-shelf-changer">
            <SelectShelf id={book.id} updateShelf={updateShelf} book={book}/>
          </div>
        </div>
        <div className="book-title">{book.title}</div>
        {book.authors && (
          <div className="book-authors">
            {book.authors.map((author) => {
             return author
            })}
          </div>
        )}
      </div>
    </li>
  )
}

export default Book;

Book.propTypes = {
  book: PropTypes.object.isRequired,
  updateShelf: PropTypes.func.isRequired
}
