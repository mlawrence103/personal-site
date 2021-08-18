import React from 'react';

class Skills extends React.Component {
  render() {
    const skills = [
      [
        { name: 'Javascript', proficiency: 99 },
        { name: 'React', proficiency: 90 },
      ],
      [
        { name: 'Redux', proficiency: 90 },
        { name: 'HTML5', proficiency: 95 },
      ],
    ];
    return (
      <div id="skills-section">
        <p className="section-header">Skills</p>
        {skills.map((skillsPair) => {
          return (
            <div id="skills-pair">
              <div id="single-skill">
                <p className="skills-name">{skillsPair[0].name}</p>
                <div className="skills-bar">
                  <div
                    className="progress"
                    style={{
                      width: `${skillsPair[0].proficiency}%`,
                    }}
                  ></div>
                </div>
              </div>
              <div id="single-skill">
                <p className="skills-name">{skillsPair[1].name}</p>
                <div className="skills-bar">
                  <div
                    className="progress"
                    style={{
                      width: `${skillsPair[1].proficiency}%`,
                    }}
                  ></div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Skills;
