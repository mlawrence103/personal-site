import React from 'react';
import tasteNotWaste from './images/TNWlogo.png';
import mitw from './images/mitw.png';

class Projects extends React.Component {
  render() {
    return (
      <div id="projects">
        <div id="project-title">Projects</div>
        <label id="project-directions">Click for more information</label>
        <div id="project-list">
          <div className="project">
            <img
              className="project-image"
              src={tasteNotWaste}
              alt="taste not waste logo"
            />
            <p className="project-description">
              Mobile application that reduces food waste by alerting users when
              their uploaded grocery items will expire and suggesting recipes
              using the relevant ingredients
            </p>
          </div>
          <div className="project">
            <img
              className="project-image"
              src={mitw}
              alt="taste not waste logo"
            />
            <p className="project-description">
              Web application for finding a meeting spot, and nearby activities,
              that balances travel time with varied transit methods from two
              addresses
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
