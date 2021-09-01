import React from 'react';
import resume from './Mabel_Lawrence_Resume.pdf';
import jobs from './professional_experience';
import leadership from './leadership';

class Experience extends React.Component {
  render() {
    return (
      <div id="experience" className="margin-top-bottom-1rem">
        <p className="experience-subtitle">Professional Experience</p>
        {jobs.map((job) => {
          return (
            <div className="experience-item">
              <div className="company-duration">
                <div className="company font-weight-400">{job.company}</div>
                <div className="duration">{job.duration}</div>
              </div>
              <div className="position-description">
                <div className="position font-weight-400">{job.position}</div>
                <div className="job-description">
                  {job.description.map((bullet) => {
                    return <div className="description-bullet">{bullet}</div>;
                  })}
                </div>
              </div>
            </div>
          );
        })}
        <p className="experience-subtitle">Leadership</p>
        {leadership.map((role) => {
          return (
            <div className="experience-item">
              <div className="organization-duration">
                <div className="organization font-weight-400">
                  {role.organization}
                </div>
                <div className="duration">{role.duration}</div>
              </div>
              <div className="position-description">
                <div className="position font-weight-400">{role.position}</div>
                <div className="job-description">
                  {role.description.map((bullet) => {
                    return <div className="description-bullet">{bullet}</div>;
                  })}
                </div>
              </div>
            </div>
          );
        })}
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
