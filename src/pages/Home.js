import React from 'react';
import './home.css';
import { motion } from 'framer-motion';
import me from '..//images/user.png';

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <motion.div
          initial={{ opacity: 0, y: -150, height:800,scale:0.2 }}
          animate={{ opacity: .5, y: 0, scale: 0.8 }}
          transition={{ duration: 1 }}
          className="rectangle"
        >
          <h1>Hey, I'm Raqin.</h1>
        </motion.div>
        <motion.img
          src={me}
          initial={{ y: 200, opacity: 0 }}
          animate={{ y: -75, x:-120, opacity: 1, scale: 0.8 }}
          transition={{ duration: 2, type: "spring" }}
          className="me-picture"
        />
        <motion.div
          initial={{ opacity: 0, y: 400 }}
          animate={{ opacity: 1, y: 100, scale: 0.8 }}
          transition={{ delay: 3, duration: 1,type: "spring" }}
          className="floating-text"
        >
          <p>A student pursuing a career in DevOps.</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 400}}
          animate={{ opacity: 1, y: 50, scale: 0.8 }}
          transition={{ delay: 1.75, duration: 1, type: "spring" } }
          className="floating-text"
        >
          <p>A dedicated tech enthusiast</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 400}}
          animate={{ opacity: 1, y: 150, scale: 0.8 }}
          transition={{ delay: 4.25, duration: 1,type: "spring" }}
          className="floating-text"
        >
          <p>Welcome to my site!</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 400}}
          animate={{ opacity: 1, y: 200, scale: 0.8 }}
          transition={{ delay: 5.5, duration: 1,type: "spring" }}
          className="floating-text"
        >
          <p>Feel free to stick around and learn more about me</p>
        </motion.div>
      </header>
    </div>
  );
}

export default Home;


