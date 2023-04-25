import React, { useState } from "react";

const Frontend = () => {
  const [skillArr, setArr] = useState([
    { icon: <i className="bx bxl-html5"></i>, skillName: "HTML" },
    { icon: <i className="bx bxl-css3"></i>, skillName: "CSS" },
    { icon: <i className="bx bxl-javascript"></i>, skillName: "JavaScript" },
    { icon: <i className="bx bxl-bootstrap"></i>, skillName: "Bootstrap" },
    { icon: <i className="bx bxl-tailwind-css"></i>, skillName: "TailwindCSS" },
    { icon: <i className="bx bxl-git"></i>, skillName: "Git" },
    { icon: <i className="bx bxl-sass"></i>, skillName: "SASS" },
    { icon: <i className="bx bx-checkbox-square"></i>, skillName: "AntDesign" },
    { icon: <i className="bx bxl-react"></i>, skillName: "ReactJS" },
    { icon: <i className="bx bxl-typescript"></i>, skillName: "TypeScript" },
    { icon: <i className="bx bx-code-alt"></i>, skillName: "Styled Component" },
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
      <h3 className="skills__title">Frontend Developer</h3>

      <div className="skills__box">
        <div className="skills__group">{renderSkills()}</div>
      </div>
    </div>
  );
};

export default Frontend;
