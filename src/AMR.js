import React from 'react';
import Contact from '../Contact';
import { useHistory } from 'react-router-dom';
import AMR_Report from './AMR_Report.pdf';

const AMR = () => {
  const history = useHistory();
  return (
    <div className="single-project-page">
      <div className="go-back-top">
        <a href="/">Home</a>
      </div>
      <div id="autonomous-mobile-robots">
        <div className="project-name">
          <div id="amr-header">
            <div id="amr-name">
              <h1>Autonomous Mobile Robots Final</h1>
            </div>
          </div>
        </div>
        <div className="project-page-description">
          <p>
            This is an educational project exploring autonomous robotics
            principles in sensing, localization, mapping and planning with the
            goal of navigating a virtual robot through a map with both known and
            unknown walls to find waypoints. The code was written in a group of
            three students for the Autonomous Mobile Robots course at Cornell
            University in 2019.
          </p>
        </div>
        <div id="amr-techstack-responsibilities">
          <div id="amr-responsibilities">
            <p>Personal Contributions</p>
            <ul>
              <li>
                Created rapidly exploring random tree path plan with MATLAB to
                direct robot to waypoints in a given map
              </li>
              <li>
                Collaborated to develop algorithm for localizing robot by
                searching for beacons with known positions in map
              </li>
            </ul>
          </div>
          <div id="amr-techstack">
            <p>Technologies Used:</p>
            <ul>
              <li>MATLAB</li>
            </ul>
          </div>
        </div>
        <div id="amr-report">
          <iframe
            width="80%"
            height="800"
            src={AMR_Report}
            title="autonomous mobile robots report"
            loading="lazy"
          ></iframe>
          <p id="amr-report-caption">
            Report on final project performance and contribution
          </p>
        </div>
        <div className="go-back-bottom">
          <button onClick={() => history.push('/')}>Go Back</button>
        </div>
      </div>
      <Contact />
    </div>
  );
};

export default AMR;
