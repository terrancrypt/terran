"use client";

import { useAppSelector } from "@/redux-toolkit/hook";
import { toggleNavbar } from "@/redux-toolkit/slice/navbarSlice";
import {
  BriefcaseIcon,
  EnvelopeIcon,
  TrophyIcon,
  UserIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { useDispatch } from "react-redux";

const Navbar = () => {
  const isOpen = useAppSelector((state) => state.navbarReducer.isOpen);
  const dispatch = useDispatch();
  return (
    <div
      className={`${
        isOpen ? "translate-x-[70vw] sm:translate-x-[300px] w-full" : ""
      } fixed top-0 -left-[70vw] sm:-left-[300px] h-full z-50 transition-transform`}
    >
      <div className="w-full h-full flex">
        <div className="w-[70vw] sm:w-[300px] h-full bg-[#f8f8f8] dark:bg-[#1c1c1c] relative p-8">
          <button
            onClick={() => dispatch(toggleNavbar())}
            className="absolute top-10 right-8"
          >
            <XMarkIcon className="w-6 h-6" />
          </button>
          <nav className="space-y-6 uppercase text-[13px] font-semibold flex flex-col pt-14">
            <a
              className="dark:hover:text-[#a1a1a1] transition-all flex gap-2 items-center"
              href=""
            >
              <UserIcon className="w-4 h-4" />
              About
            </a>
            <a
              className="dark:hover:text-[#a1a1a1] transition-all flex gap-2 items-center"
              href=""
            >
              <BriefcaseIcon className="w-4 h-4" />
              Work
            </a>
            <a
              className="dark:hover:text-[#a1a1a1] transition-all flex gap-2 items-center"
              href=""
            >
              <TrophyIcon className="w-4 h-4" />
              Achievement
            </a>
            <a
              className="dark:hover:text-[#a1a1a1] transition-all flex gap-2 items-center"
              href=""
            >
              <EnvelopeIcon className="w-4 h-4" />
              Contact
            </a>
          </nav>
        </div>
        <div
          className="flex-grow h-full bg-[#ffffff] opacity-50"
          onClick={() => dispatch(toggleNavbar())}
        ></div>
      </div>
    </div>
  );
};

export default Navbar;
