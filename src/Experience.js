import React from 'react';
import resume from './Mabel_Lawrence_Resume.pdf';

class Experience extends React.Component {
  render() {
    return (
      <div id="experience">
        <p className="experience-subtitle">Professional Experience</p>
        <a href={resume} target="_blank" rel="noopener noreferrer">
          Resume PDF
        </a>
      </div>
    );
  }
}

export default Experience;
