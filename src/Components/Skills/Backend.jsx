import React from "react";
import NestJS from "../../assets/nestjs.svg"
import MySQL from "../../assets/mysql-logo.svg"
import ExpressJS from "../../assets/express-original.svg"

const Backend = () => {
  const skillArr = [
    { icon: <i className="bx bxl-nodejs"></i>, skillName: "NodeJS" },
    { icon: <i className="bx bxl-mongodb"></i>, skillName: "MongoDS" },
    { icon: <img className="skill__icons" alt="" src={ExpressJS}/>, skillName: "ExpressJS" },
    { icon: <img className="skill__icons" alt="" src={MySQL}/>, skillName: "MySQL" },
    { icon: <i className="bx bxl-graphql"></i>, skillName: "GraphQL" },
    { icon: <i className="bx bxl-git"></i>, skillName: "Git" },
    { icon: <i className="bx bxl-docker"></i>, skillName: "Docker" },
    { icon: <img className="skill__icons" alt="" src={NestJS}/>, skillName: "NestJS" },
    
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
      <h3 className="skills__title">Backend</h3>

      <div className="skills__box">
        <div className="skills__group">{renderSkills()}</div>
      </div>
    </div>
  );
};

export default Backend;
