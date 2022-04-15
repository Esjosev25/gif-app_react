import React, { useState } from 'react';
import Proptypes from 'prop-types';
export const AddCategory = ({ setCategories }) => {
  const [inputValue, setInputValue] = useState('');
  const handleInputChange = (e) => {
    console.log(e.target.value);
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim().length === 0) {
      alert('Please enter a category');
    }

    if (inputValue.trim().length > 0) {

      setCategories((categories) => {
        //validar que no exista la categoria
        if (categories.indexOf(inputValue.toLowerCase()) >= 0) {
          alert('Category already exists');
          return categories;
        } else {
          return [inputValue.toLowerCase(), ...categories];
        }
      });
      setInputValue('');
    }
  };
  return (
    <form onSubmit={handleSubmit} action=''>
      <input type='text' value={inputValue} onChange={handleInputChange} />
    </form>
  );
};

AddCategory.propTypes = {
  setCategories: Proptypes.func.isRequired,
};
