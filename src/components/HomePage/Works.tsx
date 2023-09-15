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

const Works = () => {
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
    // {
    //   icon: <DockerIcon />,
    //   name: "Docker",
    // },
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

  const changingText = async () => {
    const textElement: HTMLElement | null = document.querySelector("#typeText");

    if (textElement) {
      const messages = [
        "Front-End Developer",
        "Back-End Developer",
        "Full-Stack Developer",
        "Smart Contract Developer",
      ];
      const delayBetweenMessages = 2000;
      const typingDelay = 100;

      while (true) {
        for (const message of messages) {
          let currentText = "";
          for (let i = 0; i < message.length; i++) {
            currentText += message[i];
            textElement.textContent = currentText;
            await new Promise((resolve) => setTimeout(resolve, typingDelay));
          }
          await new Promise((resolve) =>
            setTimeout(resolve, delayBetweenMessages)
          );
        }
      }
    }
  };

  useEffect(() => {
    changingText();
  }, []);

  return (
    <section className="bg-[#141414] py-6 lg:py-0">
      <div className={`${containerConfig}`}>
        <div className="h-[25vh] flex items-center justify-beetween">
          <div className="space-y-3 lg:space-y-0 lg:flex items-center justify-between w-full">
            <h1 className="font-semibold text-xl md:text-3xl lg:text-4xl text-white">
              I&apos;m a <span id="typeText">Full Stack Web3 Developer.</span>
            </h1>
            {/* <button className="bg-white p-4 rounded-3xl font-medium hover:scale-90 transition-all">
            See my work
          </button> */}
            <p className="text-white w-full lg:w-[600px] text-base md:text-xl lg:text-2xl font-medium">
              I&apos;m a versatile programmer with front-end, back-end, and
              smart contract development skills. I have a passion for Web3 and
              Blockchain development.
            </p>
          </div>
        </div>
        <hr className="py-10" />
        <div className="grid grid-cols-2 md:grid-cols-4 text-white pb-14 gap-14">
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

export default Works;
