import React from "react";

const WorkItems = ({ item }) => {
  return (
    <div className="work__card" key={item.id}>
      <img src={item.image} alt="" className="work__img" />
      <h3 className="work__title">{item.title}</h3>
      <div className="work__detail">
        <a target="_blank" href={item.link} className="work__button">
          See <i className="bx bx-right-arrow-alt work__button-icon"></i>
        </a>
        {item.github && (
          <a target="_blank" href={item.gitlink} className="work__button">
            Github<i className="uil uil-github-alt work__button-icon"></i>
          </a>
        )}
      </div>
    </div>
  );
};

export default WorkItems;
