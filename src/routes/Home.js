import React from 'react';
import BookLists from '../components/BookItem';
import AddBook from '../components/BookData';

const Home = () => (
  <div className="container">
    <div className="store-container">
      <BookLists />
    </div>
    <div className="Line" />
    <div className="form-container">
      <h2 className="form-title">ADD NEW BOOK</h2>
      <AddBook />
    </div>
  </div>
);

export default Home;
