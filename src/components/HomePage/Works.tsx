"use client";

import containerConfig from "@/theme/containerClassConfig";
import { useEffect } from "react";

const Works = () => {
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
    <section>
      <div className="h-[25vh] flex items-center justify-center bg-[#141414] py-6 lg:py-0">
        <div
          className={`space-y-3 lg:space-y-0 lg:flex items-center justify-between ${containerConfig}`}
        >
          <h1 className="font-semibold text-xl md:text-3xl lg:text-4xl text-white">
            I&apos;m a <span id="typeText">Full Stack Web3 Developer.</span>
          </h1>
          {/* <button className="bg-white p-4 rounded-3xl font-medium hover:scale-90 transition-all">
            See my work
          </button> */}
          <p className="text-white w-full lg:w-[600px] text-lg md:text-xl lg:text-2xl font-medium">
            I&apos;m a versatile programmer with front-end, back-end, and smart
            contract development skills. I have a passion for Web3 and
            Blockchain development.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Works;
