type Social = {
  label: string;
  link: string;
};

type Presentation = {
  mail: string;
  title: string;
  description: string;
  socials: Social[];
  profile?: string;
};

const presentation: Presentation = {
  mail: "thaiphamngoctuong@gmail.com",
  title: "Hi, I’m Terran 👋",
  // profile: "/profile.webp",
  description:
    "I'm a *Vietnamese Web3 Developer* passionate about building decentralized applications. I enjoy exploring the intersection of blockchain technology and web development to create innovative solutions.",
  socials: [
    {
      label: "Linkedin",
      link: "https://www.linkedin.com/in/terrancrypt/",
    },
    {
      label: "Github",
      link: "https://github.com/terrancrypt",
    },
    {
      label: "Youtube",
      link: "https://www.youtube.com/@terrancrypt",
    },
  ],
};

export default presentation;
