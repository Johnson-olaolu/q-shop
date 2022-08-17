import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { FiSearch } from "react-icons/fi";

const categories = [
  {
    name: "New Arrivals",
    href: "#",
    imageSrc: "https://tailwindui.com/img/ecommerce-images/home-page-01-category-01.jpg",
  },
  {
    name: "Productivity",
    href: "#",
    imageSrc: "https://tailwindui.com/img/ecommerce-images/home-page-01-category-02.jpg",
  },
  {
    name: "Workspace",
    href: "#",
    imageSrc: "https://tailwindui.com/img/ecommerce-images/home-page-01-category-04.jpg",
  },
  {
    name: "Accessories",
    href: "#",
    imageSrc: "https://tailwindui.com/img/ecommerce-images/home-page-01-category-05.jpg",
  },
  { name: "Sale", href: "#", imageSrc: "https://tailwindui.com/img/ecommerce-images/home-page-01-category-03.jpg" },
];

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Shopper</title>
        <meta name="description" content="shopper" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
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
              <Link href="#">Cart</Link>
            </li>
            <li className="py-1 px-3">
              <Link href="#">Blog</Link>
            </li>
            <li className="py-1 px-3">
              <Link href="#">Contact</Link>
            </li>
          </ol>
        </nav>
        <div className=" relative">
          <input placeholder="Search" type="text" className=" h-8 w-56 border border-gray-400 rounded-ful pl-2 text-sm pr-8" />
          <FiSearch size={18} className=" text-gray-400 absolute right-2 top-1/2 transform -translate-y-1/2" />
        </div>
      </header>
      <main>
        <section className="bg-white" id="allCategories">
          <div className="py-16 sm:py-24 xl:max-w-7xl xl:mx-auto xl:px-8">
            <div className="px-4 sm:px-6 sm:flex justify-center lg:px-8 xl:px-0">
              <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">Product Categories</h2>
            </div>

            <div className="mt-16 flow-root">
              <div className="-my-2">
                <div className="box-content py-2 relative h-80 overflow-x-auto xl:overflow-visible">
                  <div className="absolute min-w-screen-xl px-4 flex space-x-8 sm:px-6 lg:px-8 xl:relative xl:px-0 xl:space-x-0 xl:grid xl:grid-cols-5 xl:gap-x-8">
                    {categories.map((category) => (
                      <a
                        key={category.name}
                        href={category.href}
                        className="relative w-56 h-80 rounded-lg p-6 flex flex-col overflow-hidden hover:opacity-75 xl:w-auto"
                      >
                        <span aria-hidden="true" className="absolute inset-0">
                          <img src={category.imageSrc} alt="" className="w-full h-full object-center object-cover" />
                        </span>
                        <span aria-hidden="true" className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-gray-800 opacity-50" />
                        <span className="relative mt-auto text-center text-xl font-bold text-white">{category.name}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="py-16 sm:py-24 xl:max-w-7xl xl:mx-auto xl:px-8">
            <div className="px-4 sm:px-6 sm:flex sm:items-center sm:justify-between lg:px-8 xl:px-0">
              <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">Shop by Category</h2>
              <a href="#" className="hidden text-sm font-semibold text-indigo-600 hover:text-indigo-500 sm:block">
                Browse all categories<span aria-hidden="true"> &rarr;</span>
              </a>
            </div>

            <div className="mt-4 flow-root">
              <div className="-my-2">
                <div className="box-content py-2 relative h-80 overflow-x-auto xl:overflow-visible">
                  <div className="absolute min-w-screen-xl px-4 flex space-x-8 sm:px-6 lg:px-8 xl:relative xl:px-0 xl:space-x-0 xl:grid xl:grid-cols-5 xl:gap-x-8">
                    {categories.map((category) => (
                      <a
                        key={category.name}
                        href={category.href}
                        className="relative w-56 h-80 rounded-lg p-6 flex flex-col overflow-hidden hover:opacity-75 xl:w-auto"
                      >
                        <span aria-hidden="true" className="absolute inset-0">
                          <img src={category.imageSrc} alt="" className="w-full h-full object-center object-cover" />
                        </span>
                        <span aria-hidden="true" className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-gray-800 opacity-50" />
                        <span className="relative mt-auto text-center text-xl font-bold text-white">{category.name}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 px-4 sm:hidden">
              <a href="#" className="block text-sm font-semibold text-indigo-600 hover:text-indigo-500">
                Browse all categories<span aria-hidden="true"> &rarr;</span>
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
