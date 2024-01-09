"use client";

import {
  GithubOutlined,
  LinkedinOutlined,
  FacebookOutlined,
  YoutubeOutlined,
} from "@ant-design/icons";

const SocialIcons = () => {
  return (
    <div className={`space-x-3 text-lg`}>
      <a
        href="https://www.youtube.com/channel/UC0QESw8LTPb841qcABmOsvA"
        target="_blank"
      >
        <YoutubeOutlined />
      </a>
      <a href="https://github.com/terrancrypt" target="_blank">
        <GithubOutlined />
      </a>
      <a href="https://www.linkedin.com/in/terrancrypt/" target="_blank">
        <LinkedinOutlined />
      </a>
      <a href="https://www.facebook.com/terrancrypt/" target="_blank">
        <FacebookOutlined />
      </a>
    </div>
  );
};

export default SocialIcons;
