"use client";

import {
  GithubOutlined,
  LinkedinOutlined,
  FacebookOutlined,
} from "@ant-design/icons";

const SocialIcons = () => {
  return (
    <div className={`space-x-3 text-lg `}>
      <GithubOutlined />
      <LinkedinOutlined />
      <FacebookOutlined />
    </div>
  );
};

export default SocialIcons;
