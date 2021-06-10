import './App.scss';
import React, { useState } from 'react';
import Categories from './components/Categories/Categories';
import Header from './components/Header/Header';
import Quotes from './components/Quotes/Quotes';

function App() {
  const [selectedCategory, setCategory] = useState('');

  return (
    <div className="app">
      <Header />
      <Categories setCategory={setCategory} />
      <Quotes selectedCategory={selectedCategory} setCategory={setCategory} />
    </div>
  );
}

export default App;
