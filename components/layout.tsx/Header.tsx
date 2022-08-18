import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiSearch, FiShoppingCart } from "react-icons/fi";

const Header = () => {
  return (
    <header className=" max-w-7xl mx-auto px-4 py-5 flex justify-between">
      <Image alt="logo" height={"32px"} width={"80px"} src={"/images/—Pngtree—shop logo vector template design_4146470.jpg"} />
      <nav className="">
        <ol className=" flex items-center gap-2 ">
          <li className="py-1 px-3">
            <Link href="/">Home</Link>
          </li>
          <li className="py-1 px-3">
            <Link href="#">About</Link>
          </li>
          <li className="py-1 px-3">
            <Link href="#">Shop</Link>
          </li>
          <li className="py-1 px-3">
            <Link href="#">My Account</Link>
          </li>
          <li className="py-1 px-3">
            <Link href="#">Blog</Link>
          </li>
          <li className="py-1 px-3">
            <Link href="#">Contact</Link>
          </li>
        </ol>
      </nav>
      <div className=" flex gap-4 items-center">
        <div className=" relative">
          <input placeholder="Search" type="text" className=" h-8 w-56 border border-gray-400 rounded-ful pl-2 text-sm pr-8" />
          <FiSearch size={18} className=" text-gray-400 absolute right-2 top-1/2 transform -translate-y-1/2" />
        </div>
        <div className=" relative">
          <FiShoppingCart size={20} className=" text-gray-500" />
          <span className=" flex h-4 w-4 rounded-full bg-red-500 text-white text-xs items-center justify-center absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2">
            1
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
