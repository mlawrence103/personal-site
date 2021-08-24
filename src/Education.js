import React from 'react';
import ghp from './images/ghp.png';
import cornell from './images/cornell.png';

class Education extends React.Component {
  render() {
    return (
      <div id="education">
        <p id="education-title">Education</p>
        <div id="education-list">
          <div className="education-item">
            <div className="school-logo">
              <img src={ghp} alt="Grace Hopper Program Logo" />
            </div>
            <div className="education-info">
              <div className="education-dates">
                <div className="school">
                  Fullstack Academy, Grace Hopper Program
                </div>
                <div className="school-dates">April 2021 - July 2021</div>
              </div>
              <div className="education-description">
                17-week immersive fullstack software engineering course focused
                on JavaScript development with Node.js, Express, Sequelize ORM
                for PostgreSQL databases, React, and Redux. Focus on HTML5 sites
                styled with CSS.
              </div>
            </div>
          </div>
          <div className="education-item">
            <div className="school-logo">
              <img src={cornell} alt="Cornell University Seal" />
            </div>
            <div className="education-info">
              <div className="education-dates">
                <div className="school">Cornell University</div>
                <div className="school-dates">August 2015 - May 2019</div>
              </div>
              <div id="description-gpa">
                <div className="education-description">
                  B.S Engineering: Mechanical Engineering for Design in the Arts
                </div>
                <div id="gpa">GPA: 3.29</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Education;
