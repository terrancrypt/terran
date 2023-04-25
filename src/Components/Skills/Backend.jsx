import React, { useState } from 'react'

const Backend = () => { 
    const [skillArr, setArr] = useState([
        { icon: <i className='bx bxl-php' ></i>, skillName: "PHP" },
        { icon: <i className='bx bxl-nodejs' ></i>, skillName: "NodeJS" },
        { icon: <i className='bx bx-data' ></i>, skillName: "MySQL" },
        { icon: <i className='bx bxl-python' ></i>, skillName: "Python" },
      ]);

      let renderSkills = () => {
        return skillArr.map((skill, index) => {
          return (
            <div className="skills__data" key={index}>
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