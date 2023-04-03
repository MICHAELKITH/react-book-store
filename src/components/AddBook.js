import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/booksSlice';

const AddBook = () => {
  const initialInputs = {
    title: '',
    author: '',
  };
  const [input, setInputs] = useState(initialInputs);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const handleClick = (e) => {
    e.preventDefault();
    const id = uuidv4();
    const book = { id, ...input };
    dispatch(addBook(book));
    setInputs(initialInputs);
  };
  return (
    <form onSubmit={handleClick}>
      <input
        type="text"
        onChange={handleChange}
        name="title"
        value={input.title}
        placeholder="title"
      />
      <input
        type="text"
        name="author"
        onChange={handleChange}
        value={input.author}
        placeholder="author"
      />
      <button type="submit" onClick={handleClick}>
        Add Book
      </button>
    </form>
  );
};

export default AddBook;
