"use client";

import { useAppSelector } from "@/redux-toolkit/hook";
import { toggleNavbar } from "@/redux-toolkit/slice/navbarSlice";
import { XMarkIcon } from "@heroicons/react/24/outline";
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
        <div className="w-[70vw] sm:w-[300px] h-full bg-[#f8f8f8] dark:bg-[#1c1c1c] relative">
          <button
            onClick={() => dispatch(toggleNavbar())}
            className="absolute top-10 right-8"
          >
            <XMarkIcon className="w-6 h-6" />
          </button>
        </div>
        <div className="flex-grow h-full bg-[#ffffff] opacity-50"></div>
      </div>
    </div>
  );
};

export default Navbar;
