"use client";

import Link from "next/link";
import { ThemeSwitcher } from "../ThemeSwitcher/ThemeSwitcher";
import { quicksand } from "@/app/fonts";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useDispatch } from "react-redux";
import { toggleNavbar } from "@/redux-toolkit/slice/navbarSlice";
import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";

const Header = () => {
  const { theme } = useTheme();
  const dispatch = useDispatch();

  return (
    <div
      className={`py-[35px] flex justify-between items-center ${quicksand.className}`}
    >
      <button onClick={() => dispatch(toggleNavbar())} className="md:hidden">
        <EllipsisVerticalIcon className="w-8 h-8 " />
      </button>
      <Link href="/">
        <div className="relative w-[150px] h-[50px]">
          <Image
            className="object-cover"
            src={
              theme === "light"
                ? "/images/terrancrypt-logo-light.png"
                : "/images/terrancrypt-logo-dark.png"
            }
            alt="terran crypt logo"
            fill
          />
        </div>
      </Link>
      <nav className="space-x-6 uppercase text-[13px] font-bold hidden md:block">
        <a className="dark:hover:text-[#a1a1a1] transition-all" href="">
          About
        </a>
        <a className="dark:hover:text-[#a1a1a1] transition-all" href="">
          Work
        </a>
        <a className="dark:hover:text-[#a1a1a1] transition-all" href="">
          Achievement
        </a>
        <a className="dark:hover:text-[#a1a1a1] transition-all" href="">
          Contact
        </a>
      </nav>
      <ThemeSwitcher />
    </div>
  );
};

export default Header;
