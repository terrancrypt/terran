import NhaKhoaMatTroi from "../../assets/nhakhoamattroi-screenshot.png";
import TerranPortfolio from "../../assets/terranportfolio.png";
import HilightCinema from "../../assets/HilightCinema-Screenshot.png";
import Fiverr from "../../assets/Fiverr_Screenshot.png";
import ShoeStore from "../../assets/shoe-store-shot.png";
import Carhub from "../../assets/Carhub.png";
import YoutubeClone from "../../assets/Youtube_clone.png"
import NextBlog from "../../assets/NextBlog.png"

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
  {
    id: 6,
    image: YoutubeClone,
    title: "Youtube 2.0",
    category: "Front-End",
    link: "https://youtube-clone-mu-hazel.vercel.app/",
    github: true,
    gitlink:
      "https://github.com/terrancrypt/youtube_clone",
  },
  {
    id: 7,
    image: Carhub,
    title: "Carhub",
    category: "Front-End",
    link: "https://carhub-wine.vercel.app/",
    github: true,
    gitlink:
      "https://github.com/terrancrypt/carhub",
  },
  {
    id: 8,
    image: NextBlog,
    title: "Next Blog",
    category: "Full-Stack",
    link: "https://nextblog-flax.vercel.app/",
    github: true,
    gitlink:
      "https://github.com/terrancrypt/nextblog",
  },
];

export const projectsData = Data.reverse();

export const projectNav = [
  { name: "all" },
  { name: "Front-End" },
  { name: "Full-Stack" },
  { name: "Wordpress" },
];
