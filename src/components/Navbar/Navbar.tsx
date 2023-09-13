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
        isOpen ? "translate-x-[400px] w-full" : ""
      } fixed top-0 -left-[400px] h-full z-50 transition-transform`}
    >
      <div className="w-full h-full flex">
        <div className="w-[300px] sm:w-[400px]  h-full bg-[#f8f8f8] dark:bg-[#1c1c1c] relative ">
          <button
            onClick={() => dispatch(toggleNavbar())}
            className="absolute top-4 right-4"
          >
            <XMarkIcon className="w-5 h-5" />
          </button>
        </div>
        <div className="w-full h-full bg-[#ffffff] opacity-50"></div>
      </div>
    </div>
  );
};

export default Navbar;
