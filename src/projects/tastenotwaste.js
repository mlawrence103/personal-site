import React from 'react';
import tnw_logo from '../images/tnwIconClean.png';
import tnw_gif from '../images/fridgeRecordingClear.gif';

const TasteNotWaste = () => {
  return (
    <div id="taste-not-waste">
      <div className="go-back">
        <a href="/">Home</a>
      </div>
      <div className="project-name">
        <div id="tnw-name-logo">
          <img id="tnw-logo" src={tnw_logo} alt="taste not waste logo" />
          <div id="tnw-name">
            <h1>Taste Not Waste</h1>
            <div id="tnw-subheader">
              <a
                href="http://www.tastenotwasteapp.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                http://www.tastenotwasteapp.com
              </a>
              <a
                href="https://github.com/GrundoCapstone/Taste-Not-Waste"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://github.com/GrundoCapstone/Taste-Not-Waste
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="project-page-description">
        <p>
          Taste Not Waste is a mobile application that reduces food waste by
          alerting users when their uploaded grocery items will expire and
          suggesting recipes using the relevant ingredients. (Built with a team
          of four for the Grace Hopper Program)
        </p>
      </div>
      <div id="tnw-gif-techstack-responsibilities">
        <div id="tnw-gif">
          <img src={tnw_gif} alt="gif of taste not waste app in use" />
        </div>
        <div id="tnw-techstack-responsibilities">
          <div id="tnw-responsibilities">
            <p>Personal Contributions</p>
            <ul>
              <li>
                Implemented Google Vision OCR to parse food names from line
                items from uploaded or scanned receipt
              </li>
              <li>
                Set up pre-populated form in React Native to allow users to view
                and edit uploaded items before saving them
              </li>
            </ul>
          </div>
          <div id="tnw-techstack">
            <p>Technologies Used:</p>
            <ul>
              <li>React Native</li>
              <li>Redux</li>
              <li>Firebase</li>
              <li>Google Vision</li>
              <li>CSS</li>
              <li>Edamam API</li>
            </ul>
          </div>
        </div>
      </div>
      <div id="tnw-video">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/zAaoZnrvJPU"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
};

export default TasteNotWaste;
