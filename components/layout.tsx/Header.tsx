import Image from "next/image";
import Link from "next/link";
import React, { useRef, useState } from "react";
import { FiMenu, FiSearch, FiShoppingCart } from "react-icons/fi";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

const Header = () => {
  const { categories } = useSelector((state: RootState) => state.category);
  const { cartItems } = useSelector((state: RootState) => state.cart);
  const [menuOpen, setMenuOpen] = useState(false);

  const mobileMnuRef = useRef<HTMLDivElement>(null);
  return (
    <>
      <header className="hidden  max-w-7xl mx-auto px-8 py-5 lg:flex justify-between">
        <Link href={"/"}>
          <a href="" className="">
            <img alt="logo" className=" h-8" src={"/images/—Pngtree—shop logo vector template design_4146470.jpg"} />
          </a>
        </Link>
        <nav className="">
          <ol className=" flex items-center gap-2 ">
            {categories?.map((category) => (
              <li key={category.id} className="py-1 px-3">
                <Link href={`/category/${encodeURI(category.name)}`}>{category.name}</Link>
              </li>
            ))}
          </ol>
        </nav>
        <div className=" flex gap-4 items-center">
          <div className=" relative">
            <input disabled placeholder="Search" type="text" className=" h-8 xl:w-56 w-32 border border-gray-400 rounded-sm pl-2 text-sm pr-8" />
            <FiSearch size={18} className=" text-gray-400 absolute right-2 top-1/2 transform -translate-y-1/2" />
          </div>
          <Link href={"/cart"}>
            <a className=" block relative">
              <FiShoppingCart size={20} className=" text-gray-500" />
              {cartItems!?.length > 0 && (
                <span className=" flex h-4 w-4 rounded-full bg-red-500 text-white text-xs items-center justify-center absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2">
                  {cartItems?.length}
                </span>
              )}
            </a>
          </Link>
        </div>
      </header>
      <header className="flex mx-auto px-8 py-5 lg:hidden items-center justify-between ">
        <Link href={"/"}>
          <a href="" className="">
            <img alt="logo" className=" h-8" src={"/images/—Pngtree—shop logo vector template design_4146470.jpg"} />
          </a>
        </Link>
        <div className=" relative space-x-4 flex items-center">
          <Link href={"/cart"}>
            <a className=" block relative">
              <FiShoppingCart size={20} className=" text-gray-500" />
              {cartItems!?.length > 0 && (
                <span className=" flex h-4 w-4 rounded-full bg-red-500 text-white text-xs items-center justify-center absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2">
                  {cartItems?.length}
                </span>
              )}
            </a>
          </Link>
          <div className=" h-8 w-8 bg-gray-200 rounded-sm flex items-center justify-center" onClick={() => setMenuOpen(!menuOpen)}>
            <FiMenu />
          </div>
          <div
            ref={mobileMnuRef}
            className={
              menuOpen ? " absolute top-full right-0 bg-white shadow-lg z-20 p-4" : " absolute top-full right-0 bg-white shadow-lg z-20 p-4 hidden"
            }
          >
            <nav className="">
              <ol className=" flex items-left gap-2 flex-col ">
                {categories?.map((category) => (
                  <li key={category.id} className="py-1 px-3">
                    <Link href={`/category/${encodeURI(category.name)}`}>{category.name}</Link>
                  </li>
                ))}
              </ol>
            </nav>
            <div className=" flex gap-4 items-center flex-col mt-5">
              <div className=" relative">
                <input disabled placeholder="Search" type="text" className=" h-8 w-56 border border-gray-400 rounded-sm pl-2 text-sm pr-8 " />
                <FiSearch size={18} className=" text-gray-400 absolute right-2 top-1/2 transform -translate-y-1/2" />
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
