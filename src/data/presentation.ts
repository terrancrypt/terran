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
    "I'm a *vietnamese web3 developer*. I am currently working at VBI Academy",
  socials: [
    {
      label: "Linkedin",
      link: "https://www.linkedin.com/in/terrancrypt/",
    },
    {
      label: "Github",
      link: "https://github.com/terrancrypt",
    },
  ],
};

export default presentation;
