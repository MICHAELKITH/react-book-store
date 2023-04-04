import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { postBookToApi } from '../redux/books/booksSlice';

const AddBook = () => {
  const initialInputs = {
    title: '',
    author: '',
  };
  const [input, setInput] = useState(initialInputs);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = uuidv4();
    const book = { id, ...input };
    dispatch(postBookToApi(book));
    setInput(initialInputs);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        onChange={handleChange}
        name="title"
        value={input.title}
        placeholder="Title"
      />
      <input
        type="text"
        name="author"
        onChange={handleChange}
        value={input.author}
        placeholder="Author"
      />
      <button type="submit">
        Add Book
      </button>
    </form>
  );
};

export default AddBook;
