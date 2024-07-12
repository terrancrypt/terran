export type Project = {
  title: string;
  techs: string[];
  link: string;
  isComingSoon?: boolean;
};

const projects: Project[] = [
  {
    title: "OpenEdu101",
    techs: ["Education", "Next.js", "TypeScript"],
    link: "https://openedu101.com/",
  },
  {
    title: "VBI Academy",
    techs: ["Education", "Youtube"],
    link: "https://www.youtube.com/@VBIAcademy",
  },
  {
    title: "TC Protocol",
    techs: ["Web3", "DeFi", "Solidity", "TypeScript"],
    link: "https://devfolio.co/projects/tc-protocol-e5f8",
  },
];

export default projects;
