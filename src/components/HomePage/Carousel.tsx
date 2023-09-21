import Image from "next/image";
import avtImage from "public/images/avatar.jpg";
import { MinusSmallIcon } from "@heroicons/react/24/outline";
import SocialIcons from "../Icons/SocialIcons";
import containerConfig from "@/theme/containerClassConfig";

const Carousel = () => {
  return (
    <section
      className={`h-[500px] lg:h-[700px] flex items-center justify-center ${containerConfig}`}
    >
      <div className="flex flex-col items-center px-2">
        <div className="flex items-center gap-4 mb-[32px] lg:mb-[55px]">
          <Image
            src={avtImage}
            width={60}
            height={60}
            alt="terran crypt avatar"
            className="rounded-full"
          />
          <span className="md:text-lg font-medium">Thai Pham Ngoc Tuong</span>
        </div>
        <div className="font-medium text-[18px] sm:text-[20px] lg:text-[25px] xl:text-[35px] text-center">
          A good product is a convenient product.
          <br />
          Convenient for the creator, convenient for the operator, and
          convenient for the user.
        </div>
        <div className="mt-[32px] lg:mt-[55px] flex justify-center items-center gap-2">
          <span className="font-semibold text-sm">FOLLOW ME</span>
          <MinusSmallIcon className="w-5 h-5" />
          <SocialIcons />
        </div>
      </div>
    </section>
  );
};

export default Carousel;
