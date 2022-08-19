import { NextPage } from "next";
import Link from "next/link";
import React, { useState } from "react";
import { FiTrash2 } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { IProduct } from "../../services/types";
import { removeCartItem, updateCartItem } from "../../store/cartStore";

interface ISingleCartItem {
  cartItem: { product: IProduct; number: number };
}

const SingleCartItem: NextPage<ISingleCartItem> = (props) => {
  const dispatch = useDispatch();
  const { cartItem } = props;
  const [productNumber, setProductNumber] = useState<number>(0);

  const removeProductFromCart = () => {
    dispatch(removeCartItem(cartItem.product));
    toast(`${cartItem.product?.title} removed from cart`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      type: "success",
    });
  };

  const updateProductInCart = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(updateCartItem({ product: cartItem.product, number: parseInt(e.target.value) }));
  };

  return (
    <li className="flex py-6 sm:py-10">
      <div className="flex-shrink-0">
        <img
          src={cartItem.product.images[0]}
          alt={cartItem.product.title}
          className="w-24 h-32 object-contain rounded-sm object-cover sm:w-48 sm:h-48"
        />
      </div>

      <div className="ml-4 flex-1 flex flex-col justify-between sm:ml-6">
        <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
          <div space-y-2>
            <div className="flex justify-between ">
              <h3 className="text-sm">
                <Link href={`/product/${cartItem.product.id}`}>
                  <a className="font-medium text-gray-700">{cartItem.product.title}</a>
                </Link>
              </h3>
            </div>
            <p className="text-xl  text-gray-400 font-extralight">${cartItem.product.price}</p>
          </div>

          <div className="mt-4 sm:mt-0 sm:pr-9">
            <label htmlFor={`quantity-${cartItem.product.id}`} className="sr-only">
              Quantity, {cartItem.product.title}
            </label>
            <input
              placeholder=""
              min={1}
              value={cartItem.number}
              onChange={updateProductInCart}
              type="number"
              className=" h-8 w-20 border-gray-700 border px-2"
            />

            <div className="absolute top-0 right-0">
              <button type="button" className="-m-2 p-2 inline-flex text-gray-400 hover:text-gray-500">
                <span className="sr-only">Remove</span>
                <FiTrash2 onClick={removeProductFromCart} role={"button"} size={20} className=" text-red-600" />
              </button>
            </div>
          </div>
        </div>

        <p className="text-gray-400 font-extralight text-sm">Category: {cartItem.product?.category.name}</p>
      </div>
    </li>
  );
};

export default SingleCartItem;
