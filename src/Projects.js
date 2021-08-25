import React from 'react';
import { useHistory } from 'react-router-dom';
import tasteNotWaste from './images/TNWlogo.png';
import mitw from './images/mitw.png';
import amr from './images/amr.jpg';

const Projects = () => {
  const history = useHistory();
  return (
    <div id="projects">
      <div id="project-title">Projects</div>
      <label id="project-directions">Click for more information</label>
      <div id="project-list">
        <div
          className="project"
          onClick={() => history.push('/taste-not-waste')}
        >
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
            alt="meet in the middle thumbnail"
          />
          <p className="project-description">
            Web application for finding a meeting spot, and nearby activities,
            that balances travel time with varied transit methods from two
            addresses
          </p>
        </div>
        <div className="project">
          <img
            className="project-image"
            src={amr}
            alt="autonomous mobile robot screenshot"
          />
          <p className="project-description">
            Educational project exploring autonomous robotics principles in
            sensing, localization, mapping and planning with the goal of
            navigating a virtual robot through a map with both known and unknown
            walls to find waypoints
          </p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
