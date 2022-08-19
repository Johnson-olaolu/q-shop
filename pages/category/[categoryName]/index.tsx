import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import PageLoader from "../../../components/loaders/PageLoader";
import ProductCard from "../../../components/ProductCard";
import { categoriesService } from "../../../services/categories";
import { IProduct } from "../../../services/types";
import { RootState } from "../../../store";

const SingleCategory = () => {
  const router = useRouter();
  let { categoryName } = router.query;
  categoryName = decodeURI(categoryName as string);
  const { categories } = useSelector((state: RootState) => state.category);
  const [isLoading, setIsLoading] = useState(false);
  const [categoryProducts, setCategoryProducts] = useState<IProduct[]>([]);
  const activeCategory = categories?.find((cat) => cat.name == categoryName);

  useEffect(() => {
    getCategoryProducts();
  }, []);

  const getCategoryProducts = async () => {
    setIsLoading(true);
    const res = await categoriesService.getCategoryProducts(activeCategory?.id as number);
    setCategoryProducts(res);
    setIsLoading(false);
  };
  return (
    <section>
      {isLoading ? (
        <PageLoader />
      ) : (
        <div className="">
          <div
            style={{ backgroundImage: `url("${activeCategory?.image}")` }}
            className=" h-80 flex items-center justify-center bg-cover bg-center relative"
          >
            <div className="h-full w-full absolute top-0 bg-black opacity-60"></div>
            <p className=" text-5xl font-extrabold text-white relative z-10">{categoryName}</p>
          </div>
          <div className="py-16  xl:max-w-7xl xl:mx-auto xl:px-8">
            <div className="mt-4 flow-root">
              <div className="-my-2">
                <div className="box-content py-2 relative overflow-x-auto xl:overflow-visible">
                  <div className="min-w-screen-xl grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8 xl:px-0">
                    {categoryProducts.map((product, index) => (
                      <div key={product.id}>
                        <ProductCard product={product} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default SingleCategory;
