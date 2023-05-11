import NhaKhoaMatTroi from "../../assets/nhakhoamattroi-screenshot.png";
import TerranPortfolio from "../../assets/terranportfolio.png";
import HilightCinema from "../../assets/HilightCinema-Screenshot.png";
import Fiverr from "../../assets/Fiverr_Screenshot.png";
import ShoeStore from "../../assets/shoe-store-shot.png";

export const Data = [
  {
    id: 1,
    image: NhaKhoaMatTroi,
    title: "Nha Khoa Mặt Trời Website",
    category: "Wordpress",
    link: "https://nhakhoamattroi.com/",
    github: false,
  },
  {
    id: 2,
    image: TerranPortfolio,
    title: "Portfolio Website",
    category: "Front-End",
    link: "/",
    github: true,
    gitlink: "https://github.com/terrancrypt/terran",
  },
  {
    id: 3,
    image: HilightCinema,
    title: "Hilight Cinema",
    category: "Front-End",
    link: "https://hilight-cinema.vercel.app/",
    github: true,
    gitlink: "https://github.com/terrancrypt/Hilight_Cinema/",
  },
  {
    id: 4,
    image: Fiverr,
    title: "Fiverr Clone",
    category: "Front-End",
    link: "https://bc-40-fiverr-clone-capstone-project.vercel.app/",
    github: true,
    gitlink:
      "https://github.com/terrancrypt/bc_40_fiverr_clone_capstone_project",
  },
  {
    id: 5,
    image: ShoeStore,
    title: "Shoe Store",
    category: "Full-Stack",
    link: "https://fullstack-nextjs-nodejs-ecommerce.vercel.app/",
    github: true,
    gitlink:
      "https://github.com/terrancrypt/fullstack_nextjs_nodejs_ecommerce",
  },
];

export const projectsData = Data.reverse();

export const projectNav = [
  { name: "all" },
  { name: "Front-End" },
  { name: "Full-Stack" },
  { name: "Wordpress" },
];
