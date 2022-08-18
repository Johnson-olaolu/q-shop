import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiSearch, FiShoppingCart } from "react-icons/fi";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

const Header = () => {
  const { categories } = useSelector((state: RootState) => state.category);
  const { cartItems } = useSelector((state: RootState) => state.cart);
  return (
    <header className=" max-w-7xl mx-auto px-4 py-5 flex justify-between">
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
          <input placeholder="Search" type="text" className=" h-8 w-56 border border-gray-400 rounded-ful pl-2 text-sm pr-8" />
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
  );
};

export default Header;
