// App.js

import React from 'react';
import './App.css';
import Navigation from './Navigation';


import Feed from './Feed';

function App() {
  
  return (
    <div>
      <nav className="navigation">
        <Navigation />
       
      </nav>

      <main className="feed">
        <Feed />
      </main>

    </div>
  );
}

export default App;

export default App;

