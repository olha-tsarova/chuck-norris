import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { getCategories } from '../api/api';

import './Categories.scss';

const Categories = ({ setCategory }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories()
      .then((categoriesFromServer) => {
        setCategories(categoriesFromServer);
      });
  }, []);

  return (
    <section className="categories">
      <h2 className="categories__title">
        Categories
      </h2>
      <ol className="categories__list">
        {categories.map(
          (category) => (
            <li key={category}>
              <button
                type="button"
                className="categories__list--button"
                onClick={() => {
                  setCategory(category);
                }}
              >
                {category}
              </button>
            </li>
          ),
        )}
        <li>
          <button
            type="button"
            className="categories__list--button"
            onClick={() => {
              setCategory('');
            }}
          >
            random
          </button>
        </li>
      </ol>
    </section>
  );
};

Categories.propTypes = {
  setCategory: PropTypes.func.isRequired,
};

export default Categories;
