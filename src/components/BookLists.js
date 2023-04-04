import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from './Book';
import Loader from './Loader';
import { getBooksData } from '../redux/books/booksSlice';

const BookList = () => {
  const {
    books, isLoading, error, ifSuccess,
  } = useSelector(
    (state) => state.book,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooksData());
  }, [dispatch, ifSuccess]);

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <h2>Error</h2>;
  }

  if (books.length === 0) {
    return <h2>No books available. Please check back later.</h2>;
  }

  return (
    <div>
      {books.map((book) => (
        <Book key={book.id} book={book} />
      ))}
    </div>
  );
};

export default BookList;
