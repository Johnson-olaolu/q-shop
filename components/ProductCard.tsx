import { NextPage } from "next";
import Link from "next/link";
import React from "react";
import { IProduct } from "../services/types";

interface IProductCard {
  product: IProduct;
}

const ProductCard: NextPage<IProductCard> = (props) => {
  const { product } = props;
  return (
    <div className="space-y-4">
      <Link href={`/product/${product.id}`}>
        <a href={"#"} className="relative w-full h-80 rounded-sm p-6 flex flex-col overflow-hidden hover:opacity-75 xl:w-auto">
          <span aria-hidden="true" className="absolute inset-0">
            <img src={product.images[0]} alt="" className="w-full h-full object-center object-cover" />
          </span>
          <span aria-hidden="true" className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-gray-800 opacity-50" />
        </a>
      </Link>

      <div className="space-y-2 text-center">
        <p className="text-center text-xl font-medium text-gray-700">{product.title}</p>
        <p className="text-center text-xl  text-gray-400 font-extralight"> ${product.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
