import Image from "next/image";
import avtImage from "public/images/avatar.jpg";
import { mainFont } from "@/app/fonts";
import { MinusSmallIcon } from "@heroicons/react/24/outline";

const Carousel = () => {
  return (
    <section className="h-screen flex items-center justify-center">
      <div className="">
        <div>
          <Image
            src={avtImage}
            width={80}
            height={80}
            alt="terran crypt avatar"
          />
          <span>Thai Pham Ngoc Tuong</span>
        </div>
        <div>
          A good product is a convenient product. Convenient for the creator,
          convenient for the operator, and convenient for the user.
        </div>
        <div>
          <span>follow me</span>
          <MinusSmallIcon className="w-5 h-5" />
          <div></div>
        </div>
      </div>
    </section>
  );
};

export default Carousel;
