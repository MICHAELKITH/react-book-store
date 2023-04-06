import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteBookFromApi } from '../redux/books/booksSlice';
import ProgressBar from './ProgressShow';

const Book = ({ book }) => {
  const dispatch = useDispatch();
  return (
    <div className="book-Card">
      <div key={book.id} className="book-info">
        <p className="class-of">{book.category}</p>
        <p className="Title">{book.title}</p>
        <p className="Author">{book.author}</p>
        <ul>
          <li>
            <button className="Comments" type="button">
              Comments
            </button>
          </li>
          <div className="level-one" />
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
          <div className="level-one" />
          <li>
            <button className="Edit" type="button">
              Edit
            </button>
          </li>
        </ul>
      </div>
      <div className="item-progress">
        <ProgressBar />
        <div className="task-progress">
          <p className="Complete-Task">
            {Math.floor(Math.random() * (99 - 0)) + 0}
            <span>%</span>
          </p>
          <p className="Completed">Completed</p>
        </div>
      </div>
      <div className="level-two" />
      <div className="levels">
        <p className="main-levels">CURRENT CHAPTER</p>
        <p className="main-task">Chapter 10</p>
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
