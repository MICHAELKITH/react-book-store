import React, { useState } from 'react';

const AddBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleAuthorChange = (event) => {
    setAuthor(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        placeholder="title"
        value={title}
        onChange={handleTitleChange}
      />
      <input
        type="text"
        name="author"
        placeholder="author"
        value={author}
        onChange={handleAuthorChange}
      />
      <button type="submit">Add Book</button>
    </form>
  );
};

export default AddBook;
