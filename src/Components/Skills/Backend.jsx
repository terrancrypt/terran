import React, { useState } from 'react'

const Backend = () => { 
    const [skillArr, setArr] = useState([
        { icon: <i class='bx bxl-php' ></i>, skillName: "PHP" },
        { icon: <i class='bx bxl-nodejs' ></i>, skillName: "NodeJS" },
        { icon: <i class='bx bx-data' ></i>, skillName: "MySQL" },
        { icon: <i class='bx bxl-python' ></i>, skillName: "Python" },
      ]);

      let renderSkills = () => {
        return skillArr.map((skill) => {
          return (
            <div className="skills__data">
              {skill.icon}
              <div>
                <h3 className="skills__name">{skill.skillName}</h3>
              </div>
            </div>
          );
        });
      };

  return (
    <div className="skills__content">
    <h3 className="skills__title">Backend Developer</h3>

    <div className="skills__box">
      <div className="skills__group">{renderSkills()}</div>
    </div>
  </div>
  )
}

export default Backend