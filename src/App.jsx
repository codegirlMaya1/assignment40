import React from 'react';
import MovieList from './MovieList';
import './App.css';
import UserProfile from './UserProfile';
import Header from './Header';
import './App.css';


const App = () => {
  return (
    <div className="app">
      <Header />
      <main className="content">
        
           <div className='mainstyle'>
           <div>
              <UserProfile />
            </div>
            <div>
              <MovieList />
            </div>
            </div>
      </main>
      
    </div>
  );
};

export default App;
