// App.js

import React from 'react';
import './App.css';
import Navigation from './Navigation';
import Chips from './Chips';

import Feed from './Feed';

function App() {
  return (
    <div>
      <nav className="navigation">
        <Navigation />
        
      </nav>

      <div className="chips">
        <Chips />
      </div>



      <main className="feed">
        <Feed />
      </main>

    </div>
  );
}

export default App;

