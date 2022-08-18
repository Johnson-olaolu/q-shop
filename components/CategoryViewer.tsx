import { NextPage } from "next";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { categoriesService } from "../services/categories";
import { ICategory, IProduct } from "../services/types";
import Loader1 from "./loaders/Loader1";
import ProductCard from "./ProductCard";

interface ICategoryViewer {
  category: ICategory;
}

const CategoryViewer: NextPage<ICategoryViewer> = (props) => {
  const { category } = props;
  const [categoryProducts, setCategoryProducts] = useState<IProduct[]>([]);
  const [isLoading, setisLoading] = useState(false);

  useEffect(() => {
    getCategoryProducts();
  }, []);

  const getCategoryProducts = async () => {
    setisLoading(true);
    const res = await categoriesService.getCategoryProducts(category.id);
    setCategoryProducts(res);
    setisLoading(false);
  };

  return (
    <section>
      <div className="py-16 sm:py-24 xl:max-w-7xl xl:mx-auto xl:px-8">
        <div className="px-4 sm:px-6 sm:flex sm:items-center sm:justify-between lg:px-8 xl:px-0">
          <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">{category.name}</h2>
          <Link href={`category/${encodeURI(category.name)}`}>
            <a className="block text-sm font-semibold text-indigo-600 hover:text-indigo-500">Browse all category products</a>
          </Link>
        </div>

        <div className="mt-4 flow-root">
          <div className="-my-2">
            <div className="box-content py-2 relative h-80 overflow-x-auto xl:overflow-visible">
              {isLoading ? (
                <div className="h-full w-full flex items-center justify-center">
                  <Loader1 />
                </div>
              ) : (
                <div className="absolute min-w-screen-xl px-4 flex space-x-8 sm:px-6 lg:px-8 xl:relative xl:px-0 xl:space-x-0 xl:grid xl:grid-cols-5 xl:gap-x-8">
                  {categoryProducts.map((product, index) => (
                    <>{index < 5 && <ProductCard product={product} />}</>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="mt-6 px-4 sm:hidden">
          <Link href={`category/${encodeURI(category.name)}`} className="block text-sm font-semibold text-indigo-600 hover:text-indigo-500">
            <>
              Browse all categories<span aria-hidden="true"> &rarr;</span>
            </>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CategoryViewer;
