
import React from 'react';
import './Skills.css';

const Skills = () => {
  const cloudSkills = ['AWS', 'Azure', 'Google Cloud'];
  const devOpsSkills = ['Docker', 'Kubernetes', 'Ansible'];
  const softwareSkills = ['JavaScript', 'Python', 'React'];

  return (
    <div className="Skills">
      <h2>Cloud Skills</h2>
      <ul>
        {cloudSkills.map(skill => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>

      <h2>DevOps Skills</h2>
      <ul>
        {devOpsSkills.map(skill => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>

      <h2>Software Skills</h2>
      <ul>
        {softwareSkills.map(skill => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;