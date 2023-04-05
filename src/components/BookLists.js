import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from './Book';
import Loader from './Loader';
import { getBooksData } from '../redux/books/booksSlice';

const BookLists = () => {
  const {
    books, isLoading, error, ifSuccess,
  } = useSelector((store) => store.book);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooksData());
  }, [dispatch, ifSuccess]);

  if (isLoading) {
    return (
      <div>
        <Loader />
      </div>
    );
  }
  if (error) return <h2>Something Went Wrong</h2>;
  if (books.length === 0) return <h2>No books available. Please check later </h2>;
  return books.map((book) => (
    <div key={book.id} className="Lesson-Panel">
      <Book key={book.id} book={book} />
    </div>
  ));
};

export default BookLists;
