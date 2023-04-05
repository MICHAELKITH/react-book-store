import React from 'react';
import BookLists from '../components/BookLists';
import AddBook from '../components/AddBook';

const Home = () => (
  <div className="container">
    <div className="bookstore-container">
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
