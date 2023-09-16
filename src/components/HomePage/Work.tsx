import containerConfig from "@/theme/containerClassConfig";
import { GithubOutlined, GlobalOutlined } from "@ant-design/icons";
import { MinusSmallIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

interface WorkData {
  name: string;
  desc: string;
  tag: string;
  demoUrl: string;
  gitUrl: string;
  imgSrc: string;
}

const workData: WorkData[] = [
  {
    name: "TC Protocol",
    demoUrl: "https://tcprotocol.vercel.app/",
    gitUrl: "https://github.com/terrancrypt/tcprotocol",
    imgSrc: "/images/tcprotocol-screenshot.png",
    desc: `This project was the winner of my Web3 Hackfest competition. The
  project has been upgraded for use on 3 different chains but also
  uses the same EVM system. The interface part uses the ReactJs, the contract part uses the Foundry framework.`,
    tag: "FULL-STACK WEB3",
  },
  {
    name: "AirBnb Api",
    demoUrl: "https://airbnb-api.terrancrypt.com/",
    gitUrl: "https://github.com/terrancrypt/airbnb/tree/master/back_end",
    imgSrc: "/images/airbnb-api-screenshot.png",
    desc: "This project uses NestJs (NodeJs framework) to create APIs. In this project I used a lot of different technologies and tools. The part I like most is the Authentication feature of this application, using a combination of cookies, accesstoken & refreshtoken, storing cookies with Redis.",
    tag: "Back-End",
  },
  {
    name: "Fiverr Clone",
    demoUrl: "https://bc-40-fiverr-clone.vercel.app/",
    gitUrl: "https://github.com/terrancrypt/fiverr_clone_project",
    imgSrc: "/images/fiverr-clone-screenshot.png",
    desc: "This project is the first time I lead a small team. I am the one who divides the work, manages time, checks work and builds the project's Homepage. However, the data returned from the back-end of the project has been discontinued, because I no longer have enough time to build it.",
    tag: "Front-end",
  },
];

const Work = () => {
  return (
    <div className="py-20 bg-[#f8f8f8] dark:bg-[#141414]">
      <div className={`${containerConfig}`}>
        <p className="text-sm font-semibold mb-6">WORK</p>
        <h2 className="font-semibold text-xl md:text-3xl lg:text-[56px] text-black dark:text-white mb-6">
          My most recent projects
        </h2>
        <hr className="my-16" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20">
          {workData.map((item, index) => (
            <div className="space-y-4 w-full" key={index}>
              <div className="w-full h-[300px] relative border">
                <a href="">
                  {" "}
                  <Image
                    src={item.imgSrc}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </a>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold uppercase">
                  {item.tag}
                </span>
                <MinusSmallIcon className="w-3 h-3" />
                <a href={item.demoUrl} target="_blank">
                  <GlobalOutlined />
                </a>
                <MinusSmallIcon className="w-3 h-3" />
                <a href={item.gitUrl} target="_blank">
                  <GithubOutlined />
                </a>
              </div>

              <h3 className="text-2xl font-semibold">{item.name}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
