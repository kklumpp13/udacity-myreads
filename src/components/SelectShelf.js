import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SelectShelf extends Component {

  handleChange = (event) => {
    let shelf = event.target.value;
    let book = this.props.book;
    this.props.updateShelf(shelf, book);
  }

  render() {
    return (
      <select value={this.props.book.shelf} onChange={this.handleChange}>
        <option value="none" disabled>Move to...</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
      </select>
    );
  }
}

export default SelectShelf;

SelectShelf.propTypes = {
  book: PropTypes.object.isRequired,
  updateShelf: PropTypes.func.isRequired
}
