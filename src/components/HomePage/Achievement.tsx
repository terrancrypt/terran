import containerConfig from "@/theme/containerClassConfig";
import Image from "next/image";

const Achivement = () => {
  return (
    <section className={`py-20 ${containerConfig}`}>
      <Image
        src="/images/archievement.png"
        alt=""
        height={600}
        width={1500}
        className="border rounded"
      />
      <div className="pt-10 lg:pt-20 pb-5 lg:pb-10">
        <h2 className="font-semibold text-xl md:text-3xl lg:text-[56px] text-black dark:text-white mb-6">
          Archievement
        </h2>
        <span className="font-semibold text-base md:text-lg">
          Winner In DeFi Track Of Ref Finance At Web3 Hackfest 2023
        </span>
      </div>
      <div className="flex flex-col lg:flex-row justify-between text-sm md:text-base lg:text-lg gap-5 lg:gap-20">
        <p className="flex-1">
          The most recent accomplishment in the Blockchain industry that I'm
          particularly proud of is my victory in the Web3Hackfest competition.
          As someone relatively new to the programming field, I consider this
          achievement to be quite meaningful. Prior to this, I've had the
          opportunity to engage with the blockchain industry as a researcher and
          have been invested in the cryptocurrency market since 2018.
        </p>
        <div className="flex-1">
          <p>
            Link to project:{" "}
            <a
              href="https://devfolio.co/projects/tc-protocol-e5f8"
              target="_blank"
              className="underline"
            >
              https://devfolio.co/projects/tc-protocol-e5f8
            </a>
          </p>
          <p>
            Github (new version):{" "}
            <a
              href="https://devfolio.co/projects/tc-protocol-e5f8"
              target="_blank"
              className="underline"
            >
              https://github.com/terrancrypt/tcprotocol
            </a>
          </p>
          <p>
            Try this project out:{" "}
            <a
              href="https://tcprotocol.vercel.app/"
              target="_blank"
              className="underline"
            >
              https://tcprotocol.vercel.app/
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Achivement;
