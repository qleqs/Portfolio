import React from 'react';
import './home.css';

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Raqin Shikder's Homepage</h1>
        
        <p>
          Raqin Shikder is a software developer and entrepreneur.
        </p>
        <a
          className="App-link"
          href="https://github.com/raqinshikder"
          target="_blank"
          rel="noopener noreferrer"
        >
          Check out Raqin's Github
        </a>
      </header>
    </div>
  );
}

export default Home;