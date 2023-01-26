import React from 'react';
import './home.css';
import { motion } from 'framer-motion';
import me from '..//images/user.png';

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <motion.div
          initial={{ opacity: 0, y: -150, height: 800 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="rectangle"
        >
          <h1>Hey, I'm Qleqs.</h1>
        </motion.div>
        <motion.img
          src={me}
          initial={{ y: 200, opacity: 0 }}
          animate={{ y: -75, x:-120, opacity: 1 }}
          transition={{ duration: 2, type: "spring" }}
          className="me-picture"
        />
      </header>
    </div>
  );
}

export default Home;
