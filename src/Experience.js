import React from 'react';
import resume from './Mabel_Lawrence_Resume.pdf';
import jobs from './professional_experience';

class Experience extends React.Component {
  render() {
    return (
      <div id="experience">
        <p className="experience-subtitle">Professional Experience</p>
        <div className="experience-item">
          <div className="company-duration">
            <div className="company">Recreational Equipment Inc.</div>
            <div className="duration">August 2019 - Present</div>
          </div>
          <div className="position-description">
            <div className="position">
              Local Experiences Guide and Retail Specialist
            </div>
            <div className="job-description">
              <div className="description-bullet">
                - Provided feature specifications, fit guidance, and technical
                advice about hiking, camping, and climbing gear
              </div>
              <div className="description-bullet">
                - Taught lessons on bouldering, compass navigation, and first
                aid to encourage confidence in the outdoors
              </div>
            </div>
          </div>
        </div>
        <button id="resume-button">
          <a href={resume} target="_blank" rel="noopener noreferrer">
            Resume PDF
          </a>
        </button>
      </div>
    );
  }
}

export default Experience;
