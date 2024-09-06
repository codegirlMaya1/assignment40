import React, { useState } from 'react';
import './App.css';

const movies = [
  { title: 'Romance', description: 'Innocent and Exciting First love is often a magical and unforgettable experience. ....' },
  { title: 'Comedy', description: 'Two opposing football coaches from rival schools fall in love with each other..' },
  // Add more movies here
];

const MovieList = () => {
  const [showDescriptions, setShowDescriptions] = useState({});
  const [cart, setCart] = useState([]);

  const toggleDescription = (index) => {
    setShowDescriptions((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const addToCart = (movie) => {
    setCart((prev) => [...prev, movie]);
  };

  const removeFromCart = (index) => {
    setCart((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h1>Movie List</h1>
      <ul className='section2'>
        {movies.map((movie, index) => (
          <li key={index}>
            <h2>{movie.title}</h2>
            <button onClick={() => toggleDescription(index)}>
              {showDescriptions[index] ? 'Hide Description' : 'Show Description'}
            </button>
            {showDescriptions[index] && <p>{movie.description}</p>}
            <button onClick={() => addToCart(movie)}>Add to Cart</button>
          </li>
        ))}
      </ul>
      <h2>Cart</h2>
      <ul className='cart2'>
        {cart.map((movie, index) => (
          <li key={index}>
            <h2>{movie.title}</h2>
            <button onClick={() => removeFromCart(index)}>Remove from Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
  function MyComponent() {
    return (
      <div className="section-padding">
        <h1>Hello, World!</h1>
      </div>
    );
  }
};

export default MovieList;