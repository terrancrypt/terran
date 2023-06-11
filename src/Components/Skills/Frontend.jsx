import React from "react";
import NextJS from "../../assets/nextjs.svg";

const Frontend = () => {
  const skillArr = [
    { icon: <i className="bx bxl-javascript"></i>, skillName: "JavaScript" },
    { icon: <i className="bx bxl-react"></i>, skillName: "ReactJS" },
    { icon: <i className="bx bxl-redux"></i>, skillName: "Redux" },
    {
      icon: <img className="skill__icons" alt="" src={NextJS} />,
      skillName: "NextJS",
    },
    { icon: <i className="bx bxl-typescript"></i>, skillName: "TypeScript" },
    { icon: <i className="bx bxl-sass"></i>, skillName: "SASS" },
    { icon: <i className="bx bxl-bootstrap"></i>, skillName: "Bootstrap" },
    { icon: <i className="bx bxl-tailwind-css"></i>, skillName: "TailwindCSS" },
    { icon: <i className="bx bx-checkbox-square"></i>, skillName: "AntDesign" },
    { icon: <i className="bx bx-code-alt"></i>, skillName: "Styled Component" },
  ];

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
      <h3 className="skills__title">Frontend</h3>

      <div className="skills__box">
        <div className="skills__group">{renderSkills()}</div>
      </div>
    </div>
  );
};

export default Frontend;
