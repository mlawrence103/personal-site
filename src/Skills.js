import React from 'react';

class Skills extends React.Component {
  render() {
    const codingSkills = [
      { name: 'Javascript', proficiency: 99 },
      { name: 'React', proficiency: 90 },
      { name: 'Redux', proficiency: 90 },
      { name: 'HTML5', proficiency: 95 },
      { name: 'CSS', proficiency: 95 },
      { name: 'Firebase', proficiency: 80 },
      { name: 'Express', proficiency: 85 },
      { name: 'PostgreSQL', proficiency: 75 },
      { name: 'Arduino', proficiency: 75 },
      { name: 'Matlab', proficiency: 60 },
    ];
    const designSkills = [
      { name: 'Rhino3D', proficiency: 90 },
      { name: 'Vectorworks', proficiency: 90 },
      { name: 'Photoshop', proficiency: 80 },
      { name: 'Fusion 360', proficiency: 60 },
    ];
    return (
      <div id="skills-section">
        <p className="section-header">Skills</p>
        <p className="skills-type">Technical Skills</p>
        <div id="skills-bars">
          {codingSkills.map((skill) => {
            return (
              <div id="single-skill" key={skill.name}>
                <p className="skills-name">{skill.name}</p>
                <div className="skills-bar">
                  <div
                    className="progress-coding"
                    style={{
                      width: `${skill.proficiency}%`,
                    }}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>
        <p className="skills-type">Design Skills</p>
        <div id="skills-bars">
          {designSkills.map((skill) => {
            return (
              <div id="single-skill" key={skill.name}>
                <p className="skills-name">{skill.name}</p>
                <div className="skills-bar">
                  <div
                    className="progress-design"
                    style={{
                      width: `${skill.proficiency}%`,
                    }}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Skills;
