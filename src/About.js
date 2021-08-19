import React from 'react';
import cora from './images/cora.jpeg';
import caving from './images/caving.jpg';
import eating_burrito from './images/eating_burrito.jpg';
import watermelon from './images/watermelon.jpeg';
import me from './images/about_me.JPG';
import Lottie from 'react-lottie';
import campfire from './lotties/campfire.json';
import black_dog from './lotties/black_dog.json';
import noodles from './lotties/noodles.json';
import pinch from './lotties/pinch.json';

class About extends React.Component {
  render() {
    const defaultOptions = {
      loop: true,
      autoplay: true,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice',
      },
    };
    return (
      <div id="about">
        <div id="about-header">
          {/* <p className="section-header">About</p> */}
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
                      <Lottie
                        options={{ defaultOptions, animationData: black_dog }}
                        width={'70%'}
                      />
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
                      <Lottie
                        options={{ defaultOptions, animationData: campfire }}
                        width={'80%'}
                      />
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
                      <Lottie
                        options={{ defaultOptions, animationData: noodles }}
                        width={'100%'}
                        height={'110%'}
                      />
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
                      <Lottie
                        options={{
                          defaultOptions,
                          animationData: pinch,
                        }}
                        width={'100%'}
                        height={'110%'}
                      />
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
