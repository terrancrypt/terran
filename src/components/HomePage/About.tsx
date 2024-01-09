"use client";

import containerConfig from "@/theme/containerClassConfig";
import React, { useEffect } from "react";
import ReactIcon from "../Icons/ReactIcon";
import TypeScriptIcon from "../Icons/TypeScriptIcon";
import JavaScriptIcon from "../Icons/JavaScriptIcon";
import NestJsIcon from "../Icons/NestJsIcon";
import SolidityIcon from "../Icons/SolidityIcon";
import NextJsIcon from "../Icons/NextJsIcon";
import NodeJsIcon from "../Icons/NodeJsIcon";
import Image from "next/image";

const About = () => {
  const dataSkills = [
    {
      icon: <JavaScriptIcon />,
      name: "JavaScript",
    },
    {
      icon: <TypeScriptIcon />,
      name: "TypeScript",
    },
    {
      icon: <ReactIcon />,
      name: "React",
    },
    {
      icon: <NextJsIcon />,
      name: "NextJS",
    },
    {
      icon: <NodeJsIcon />,
      name: "NodeJS",
    },
    {
      icon: <NestJsIcon />,
      name: "NestJS",
    },
    {
      icon: <SolidityIcon />,
      name: "Solidity",
    },
    {
      icon: (
        <Image
          src="/images/foundry-icon.png"
          width={35}
          height={35}
          alt="foundry icon"
        />
      ),
      name: "Foundry",
    },
  ];

  // const changingText = async () => {
  //   const textElement: HTMLElement | null = document.querySelector("#typeText");

  //   if (textElement) {
  //     const messages = ["Web3 Developer"];
  //     const delayBetweenMessages = 2000;
  //     const typingDelay = 100;

  //     while (true) {
  //       for (const message of messages) {
  //         let currentText = "";
  //         for (let i = 0; i < message.length; i++) {
  //           currentText += message[i];
  //           textElement.textContent = currentText;
  //           await new Promise((resolve) => setTimeout(resolve, typingDelay));
  //         }
  //         await new Promise((resolve) =>
  //           setTimeout(resolve, delayBetweenMessages)
  //         );
  //       }
  //     }
  //   }
  // };

  // useEffect(() => {
  //   changingText();
  // }, []);

  return (
    <section className="bg-[#141414]" id="about">
      <div className={`${containerConfig}`}>
        <div className="flex items-center justify-beetween pt-10 lg:pt-20">
          <div className="space-y-3 lg:space-y-0 lg:flex items-center justify-between w-full lg:pb-20">
            <h1 className="font-semibold text-lg md:text-xl lg:text-2xl text-white ">
              I&apos;m a <span id="typeText">Web3 Developer</span>
            </h1>
            <p className="text-white w-full lg:w-[600px] text-sm md:text-base lg:text-lg pb-10 lg:pb-0">
              I&apos;m an individual with a deep passion for Web3 development
              and the DeFi space. With small experiences, I have had the
              opportunity to participate in several interesting projects. I
              believe that learning is a never-ending journey and I am always
              willing to accept new challenges to develop myself and my
              knowledge.
            </p>
          </div>
        </div>
        <hr />
        <div className="grid grid-cols-2 md:grid-cols-4 text-white py-20 gap-14">
          {dataSkills.map((item, index) => (
            <div key={index} className="flex justify-center">
              <div className="text-center flex flex-col items-center">
                {item.icon}
                <h3 className="text-base md:text-lg lg:text-xl mt-2 font-medium">
                  {item.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
