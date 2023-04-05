import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteBookFromApi } from '../redux/books/booksSlice';
import ProgressBar from './ProgressBar';

const Book = ({ book }) => {
  const dispatch = useDispatch();
  return (
    <div className="book-Card">
      <div key={book.id} className="book-informations">
        <p className="School-of">{book.category}</p>
        <p className="Title">{book.title}</p>
        <p className="Author">{book.author}</p>
        <ul>
          <li>
            <button className="Comments" type="button">
              Comments
            </button>
          </li>
          <div className="Line-2" />
          <li>
            <button
              className="Remove"
              type="button"
              onClick={() => {
                dispatch(deleteBookFromApi(book.id));
              }}
            >
              Remove
            </button>
          </li>
          <div className="Line-2" />
          <li>
            <button className="Edit" type="button">
              Edit
            </button>
          </li>
        </ul>
      </div>
      <div className="book-progress">
        <ProgressBar />
        <div className="progress-text">
          <p className="Percent-Complete">
            {Math.floor(Math.random() * (99 - 0)) + 0}
            <span>%</span>
          </p>
          <p className="Completed">Completed</p>
        </div>
      </div>
      <div className="Line-3" />
      <div className="chapters">
        <p className="Current-Chapter">CURRENT CHAPTER</p>
        <p className="Current-Lesson">Chapter 12</p>
        <button type="button" className="Update-progress">
          UPDATE PROGRESS
        </button>
      </div>
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    author: PropTypes.string,
    category: PropTypes.string,
  }).isRequired,
};

export default Book;
