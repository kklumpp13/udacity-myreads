import React from 'react';
import PropTypes from 'prop-types';

const SelectShelf = (props) => {

  function handleChange(event) {
    let shelf = event.target.value;
    let book = props.book;
    props.updateShelf(shelf, book);
  }

  return (
    <select value={props.book.shelf} onChange={handleChange}>
      <option value="none" disabled>Move to...</option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
    </select>
  )
}

export default SelectShelf;

SelectShelf.propTypes = {
  book: PropTypes.object.isRequired,
  updateShelf: PropTypes.func.isRequired
}
