import React, { useState } from "react";

const Frontend = () => {
  const [skillArr, setArr] = useState([
    { icon: <i class="bx bxl-html5"></i>, skillName: "HTML" },
    { icon: <i class="bx bxl-css3"></i>, skillName: "CSS" },
    { icon: <i class="bx bxl-javascript"></i>, skillName: "JavaScript" },
    { icon: <i class="bx bxl-bootstrap"></i>, skillName: "Bootstrap" },
    { icon: <i class="bx bxl-tailwind-css"></i>, skillName: "TailwindCSS" },
    { icon: <i class="bx bxl-git"></i>, skillName: "Git" },
    { icon: <i class="bx bxl-sass"></i>, skillName: "SASS" },
    { icon: <i class="bx bx-checkbox-square"></i>, skillName: "AntDesign" },
    { icon: <i class="bx bxl-react"></i>, skillName: "ReactJS" },
    { icon: <i class="bx bxl-typescript"></i>, skillName: "TypeScript" },
    { icon: <i class="bx bx-code-alt"></i>, skillName: "Styled Component" },
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
      <h3 className="skills__title">Frontend Developer</h3>

      <div className="skills__box">
        <div className="skills__group">{renderSkills()}</div>
      </div>
    </div>
  );
};

export default Frontend;
