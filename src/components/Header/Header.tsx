import Link from "next/link";
import { ThemeSwitcher } from "../ThemeSwitcher/ThemeSwitcher";
import { mPlus1p } from "@/app/fonts";

const Header = () => {
  return (
    <div
      className={`py-[35px] flex justify-between items-center ${mPlus1p.className}`}
    >
      <Link href="/">TerranCrypt</Link>
      <nav className="space-x-6 uppercase text-sm font-bold text-[#454545]">
        <a href="">About</a>
        <a href="">Work</a>
        <a href="">Achievement</a>
        <a href="">Contact</a>
      </nav>
      <ThemeSwitcher />
    </div>
  );
};

export default Header;
