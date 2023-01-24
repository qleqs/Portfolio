import React, { useState } from 'react';
import Whoami from './whoami';

function About() {
  const [showText, setShowText] = useState(false);

  return (
    <div>
      <Whoami onFinish={() => setShowText(true)} />
      {showText && (
        <div>
          <p>I am an aspiring Devops and engineer who is currently studying at BCIT</p>
          <p>I have experience in many technologies and languages, for an in depth look you can check out my skills page</p>
          <p>I am constantly learning and expanding my skillset to stay up to date with the latest technologies and industry trends.</p>
        </div>
      )}
    </div>
  );
}

export default About;

