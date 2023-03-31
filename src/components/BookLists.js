import React from 'react';
import Book from './Book';

const books = [
  {
    id: 1,
    title: 'Action and Adventure',
    author: 'Harry Potter',
  },
  { id: 2, title: 'Classics', author: 'Charles Dickens' },
  { id: 3, title: 'To Kill A Mockingbird', author: 'HARPER LEE' },
  {
    id: 4,
    title: 'Little Women',
    author: 'Louisa May',
  },
  {
    id: 5,
    title: 'Beloved',
    author: 'Toni Marison',
  },
  {
    id: 6,
    title: 'The Night Fire',
    author: 'Michael Connelly',
  },
];

const BookLists = () => (
  <div>
    {books.map((book) => (
      <Book key={book.id} book={book} />
    ))}
  </div>
);

export default BookLists;
