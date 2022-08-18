import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { productServices } from "../../../services/product";
import { IProduct } from "../../../services/types";

const SingleProductPage = () => {
  const router = useRouter();
  let { productId } = router.query;
  const [productDetails, setProductDetails] = useState<IProduct>();

  useEffect(() => {
    getProductDetails();
  }, []);

  const getProductDetails = async () => {
    const res = await productServices.getSingleProduct(productId as string);
    setProductDetails(res);
  };
  return (
    <section>
      <div className="py-8  xl:max-w-7xl xl:mx-auto xl:px-8">
        <div className=" grid lg:grid-cols-2 gap-40 ">
          <div style={{ height: "480px" }} className="relative w-full  rounded-sm p-6 flex flex-col overflow-hidden hover:opacity-75 xl:w-auto">
            <span aria-hidden="true" className="absolute inset-0">
              <img src={productDetails?.images[0]} alt="" className="w-full h-full object-center object-cover" />
            </span>
            <span aria-hidden="true" className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-gray-800 opacity-50" />
          </div>
          <div className="space-y-5">
            <div className="space-y-2">
              <h2 className="text-xl font-medium text-gray-700">{productDetails?.title}</h2>
              <p className="text-xl  text-gray-400 font-extralight">${productDetails?.price}</p>
            </div>
            <div className=" h-40">
              <p className=" text-sm text-gray-700 font-extraligh">{productDetails?.description}</p>
            </div>
            <div className=" space-x-4">
              <input placeholder="0" type="number" className=" h-8 w-20 border-gray-700 border px-2" />
              <button className=" h-8 px-4 rounded-sm bg-gray-700 text-sm text-white">Add to Cart</button>
            </div>
            <p className=""></p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleProductPage;
