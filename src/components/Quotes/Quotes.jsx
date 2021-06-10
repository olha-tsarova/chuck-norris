import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { getJoke } from '../api/api';

import './Quotes.scss';
import chuck from '../../images/clipart11314801.png';

const Quotes = ({ selectedCategory }) => {
  const [quote, setQuote] = useState('');

  useEffect(() => {
    getJoke(selectedCategory)
      .then((joke) => {
        setQuote(joke);
      });
  }, [selectedCategory]);

  return (
    <section className="quote">
      <div className="quote__text-wrapper">
        <p className="quote__text">
          {quote}
        </p>
      </div>
      <img
        src={chuck}
        alt="chuck norris"
        className="quote__image"
      />
    </section>
  );
};

Quotes.propTypes = {
  selectedCategory: PropTypes.string,
};

Quotes.defaultProps = {
  selectedCategory: '',
};

export default Quotes;
