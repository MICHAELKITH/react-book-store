import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { checkStatus } from '../redux/categories/categoriesSlice';

const Categories = () => {
  const { message } = useSelector((store) => store.categorie);
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(checkStatus());
  };

  return (
    <div id="categories">
      <button onClick={handleClick} type="button">
        Check State
      </button>
      <h2>{message}</h2>
    </div>
  );
};

export default Categories;
