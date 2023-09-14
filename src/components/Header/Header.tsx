"use client";

import Link from "next/link";
import { ThemeSwitcher } from "../ThemeSwitcher/ThemeSwitcher";
import { mainFont } from "@/app/fonts";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useDispatch } from "react-redux";
import { toggleNavbar } from "@/redux-toolkit/slice/navbarSlice";
import {
  BriefcaseIcon,
  EllipsisVerticalIcon,
  EnvelopeIcon,
  TrophyIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import logoLight from "public/images/terrancrypt-logo-light.png";
import logoDark from "public/images/terrancrypt-logo-dark.png";

const Header = () => {
  const { theme } = useTheme();
  const dispatch = useDispatch();

  return (
    <div className=" fixed top-0 left-0 w-full  xl:px-0 lg:px-2 md:px-4 px-6">
      <div
        className={`py-[25px] flex justify-between items-center ${mainFont.className} tracking-wider container mx-auto`}
      >
        <button onClick={() => dispatch(toggleNavbar())} className="md:hidden">
          <EllipsisVerticalIcon className="w-8 h-8 " />
        </button>
        <Link href="/">
          <Image
            className="object-cover"
            src={theme === "light" ? logoLight : logoDark}
            alt="terran crypt logo"
            width={150}
            height={50}
            layout="resposive"
          />
        </Link>
        <nav className="space-x-8 uppercase text-[13px] font-semibold hidden md:flex">
          <a
            className="dark:hover:text-[#a1a1a1] transition-all flex gap-1 items-center"
            href=""
          >
            <UserIcon className="w-4 h-4" />
            About
          </a>
          <a
            className="dark:hover:text-[#a1a1a1] transition-all flex gap-1 items-center"
            href=""
          >
            <BriefcaseIcon className="w-4 h-4" />
            Work
          </a>
          <a
            className="dark:hover:text-[#a1a1a1] transition-all flex gap-1 items-center"
            href=""
          >
            <TrophyIcon className="w-4 h-4" />
            Achievement
          </a>
          <a
            className="dark:hover:text-[#a1a1a1] transition-all flex gap-1 items-center"
            href=""
          >
            <EnvelopeIcon className="w-4 h-4" />
            Contact
          </a>
        </nav>
        <ThemeSwitcher />
      </div>
    </div>
  );
};

export default Header;
