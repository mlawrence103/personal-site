import React from 'react';
import linkedin from './images/linkedinLogo.png';
import github from './images/githubLogo.png';

class Contact extends React.Component {
  render() {
    return (
      <div id="contact">
        <div id="contact-main">
          <div id="contact-headers">
            <p className="contact-title">The Professional Links</p>
            <p className="contact-title">Email</p>
          </div>
          <div id="contact-info">
            <div id="contact-logos">
              <a href="https://www.linkedin.com/in/mabellawrence/">
                <img src={linkedin} alt="linkedin logo" />
              </a>
              <a href="https://github.com/mlawrence103">
                <img src={github} alt="github logo" />
              </a>
            </div>
            <div id="email">
              <a href="ml935@cornell.edu">ml935@cornell.edu</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
