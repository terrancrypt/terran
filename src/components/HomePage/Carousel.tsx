import Image from "next/image";
import avtImage from "public/images/avatar.jpg";
import { MinusSmallIcon } from "@heroicons/react/24/outline";
import SocialIcons from "../SocialIcons/SocialIcons";
import containerConfig from "@/theme/containerClassConfig";

const Carousel = () => {
  return (
    <section
      className={`h-[75vh] flex items-center justify-center ${containerConfig}`}
    >
      <div className="flex flex-col items-center">
        <div className="flex items-center gap-4 mb-[64px]">
          <Image
            src={avtImage}
            width={80}
            height={80}
            alt="terran crypt avatar"
            className="rounded-full"
          />
          <span className="md:text-xl font-medium">Thai Pham Ngoc Tuong</span>
        </div>
        <div className="font-medium text-[20px] sm:text-[30px] lg:text-[40px] text-center">
          A good product is a convenient product.
          <br />
          Convenient for the creator, convenient for the operator, and
          convenient for the user.
        </div>
        <div className="mt-[64px] flex justify-center items-center gap-2">
          <span className="font-semibold text-sm">FOLLOW ME</span>
          <MinusSmallIcon className="w-5 h-5" />
          <SocialIcons />
        </div>
      </div>
    </section>
  );
};

export default Carousel;
