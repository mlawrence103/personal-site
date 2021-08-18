import React from 'react';
import cora from './images/cora.jpeg';
import caving from './images/caving.jpg';
import eating_burrito from './images/eating_burrito.jpg';
import watermelon from './images/watermelon.jpeg';
import me from './images/about_me.JPG';
import { FaDog } from 'react-icons/fa';
import { GiForestCamp, GiSushis, GiMagnifyingGlass } from 'react-icons/gi';

class About extends React.Component {
  render() {
    return (
      <div id="about">
        <div id="about-header">
          <p>About</p>
        </div>
        <div id="about-content">
          <div id="about-text">
            <p className="about-subtitle">Hi, I'm Mabel</p>
            <p>
              I am a software engineer leveraging the power of technology to
              make information more interesting and accessible for modern
              audiences. I have a background in mechanical engineering and
              design, and I enjoy problem solving everything from how to
              optimize code for an application to how to contruct an elliptical
              dome for a play.
            </p>
            <img id="about-me-img" src={me} alt="Mabel with pumpkin" />
          </div>
          <div id="about-tiles">
            <div className="about-tiles-row">
              <div id="about-tiles-text-container">
                <p className="about-subtitle" id="some-things-i-like">
                  Some Things I Like
                </p>
                <label id="flip-directions">Mouse over for proof</label>
              </div>
            </div>
            <div className="about-tiles-row">
              <div className="about-tile">
                <div className="flip-inner">
                  <div className="flip-front">
                    <div className="about-icon">
                      <FaDog />
                    </div>
                    <p>My Dog: Cora</p>
                  </div>
                  <div className="flip-back">
                    <img src={cora} alt="Cora" />
                  </div>
                </div>
              </div>
              <div className="about-tile">
                <div className="flip-inner">
                  <div className="flip-front">
                    <div className="about-icon">
                      <GiForestCamp />
                    </div>
                    <p>Adventuring</p>
                  </div>
                  <div className="flip-back">
                    <img src={caving} alt="caving" />
                  </div>
                </div>
              </div>
            </div>
            <div className="about-tiles-row">
              <div className="about-tile">
                <div className="flip-inner">
                  <div className="flip-front">
                    <div className="about-icon">
                      <GiSushis />
                    </div>
                    <p>Good Food</p>
                  </div>
                  <div className="flip-back">
                    <img src={eating_burrito} alt="Cora" />
                  </div>
                </div>
              </div>
              <div className="about-tile">
                <div className="flip-inner">
                  <div className="flip-front">
                    <div className="about-icon">
                      <GiMagnifyingGlass />
                    </div>
                    <p>Really Small Things</p>
                  </div>
                  <div className="flip-back">
                    <img src={watermelon} alt="Cora" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default About;
