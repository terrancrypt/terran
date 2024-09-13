export type Project = {
  title: string;
  techs: string[];
  link: string;
  isComingSoon?: boolean;
};

const projects: Project[] = [
  {
    title: "OpenEDU",
    techs: ["Education Platform", "Blockchain Lead"],
    link: "https://openedu.net/",
  },
  {
    title: "VBI Academy",
    techs: ["Education Channel", "Training Specialist"],
    link: "https://www.youtube.com/@VBIAcademy",
  },
  {
    title: "Web3Roadmap",
    techs: ["Open-source"],
    link: "https://web3roadmap.com/",
  },
  {
    title: "TC Protocol",
    techs: ["Web3", "Win Hackathon"],
    link: "https://devfolio.co/projects/tc-protocol-e5f8",
  },
];

export default projects;
