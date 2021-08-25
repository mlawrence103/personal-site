import React from 'react';
import Contact from './Contact';
import { useHistory } from 'react-router-dom';

const MeetInTheMiddle = () => {
  const history = useHistory();
  return (
    <div className="single-project-page">
      <div className="go-back-top">
        <a href="/">Home</a>
      </div>
      <div id="meet-in-the-middle">
        <div className="project-name">
          <div id="mitw-header">
            <div id="mitw-name">
              <h1>Meet In the Middle</h1>
              <div id="mitw-subheader">
                <a
                  href="https://github.com/mlawrence103/async-project"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://github.com/mlawrence103/async-project
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="project-page-description">
          <p>
            Meet in the Middle is a web application for finding a meeting spot,
            and nearby activities, that balances travel time with varied transit
            methods from two addresses. Note: to run GitHub, you will need a{' '}
            <a href="https://www.mapbox.com/">MapBox</a> API Key, a{' '}
            <a href="https://www.yelp.com/developers/documentation/v3/get_started">
              Yelp Fusion
            </a>{' '}
            API key, and a way to add CORS to request headers(like this{' '}
            <a href="https://github.com/Rob--W/cors-anywhere">
              CORS anywhere program
            </a>
            )
          </p>
        </div>
        <div id="mitw-techstack-responsibilities">
          <div id="mitw-responsibilities">
            <p>Personal Contributions</p>
            <ul>
              <li>
                Integrated Mapbox and Yelp APIs to render dynamic map and highly
                rated restaurant suggestions neat meetup
              </li>
              <li>
                Determined formula to produce meeting point that best accounted
                for average paces by car, foot, and bike
              </li>
            </ul>
          </div>
          <div id="mitw-techstack">
            <p>Technologies Used:</p>
            <ul>
              <li>React</li>
              <li>Redux</li>
              <li>Mapbox API</li>
              <li>Yelp API</li>
              <li>CSS</li>
            </ul>
          </div>
        </div>
        <div id="mitw-video">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/kDL4QQnQzS0"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <div className="go-back-bottom">
          <button onClick={() => history.push('/')}>Go Back</button>
        </div>
      </div>
      <Contact />
    </div>
  );
};

export default MeetInTheMiddle;
