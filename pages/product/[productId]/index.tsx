import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import PageLoader from "../../../components/loaders/PageLoader";
import { productServices } from "../../../services/product";
import { IProduct } from "../../../services/types";
import { RootState } from "../../../store";
import { addCartItem, removeCartItem, setCartItems, updateCartItem } from "../../../store/cartStore";

const SingleProductPage = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  let { productId } = router.query;
  const { cartItems } = useSelector((state: RootState) => state.cart);
  const [productDetails, setProductDetails] = useState<IProduct>();
  const [productNumber, setProductNumber] = useState<number>(0);
  const [itemInCart, setItemInCart] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getProductDetails();
  }, []);

  useEffect(() => {
    if (cartItems) {
      const item = cartItems.find((i) => i.product.id === productDetails?.id);
      if (!item) {
        setProductNumber(0);
        setItemInCart(false);
      } else {
        setItemInCart(true);
        setProductNumber(item?.number);
      }
    }
  }, [cartItems, productDetails]);

  const getProductDetails = async () => {
    setLoading(true);
    const res = await productServices.getSingleProduct(productId as string);
    setProductDetails(res);
    setLoading(false);
  };

  const addProductToCart = () => {
    if (cartItems?.length > 0) {
      dispatch(addCartItem({ product: productDetails, number: productNumber }));
    } else {
      dispatch(setCartItems([{ product: productDetails, number: productNumber }]));
    }
    toast(`${productNumber} units of ${productDetails?.title} has been added to cart`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      type: "success",
    });
  };

  const removeProductFromCart = () => {
    dispatch(removeCartItem(productDetails));
    toast(`${productDetails?.title} removed from cart`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      type: "success",
    });
  };

  const updateProductInCart = () => {
    dispatch(updateCartItem({ product: productDetails, number: productNumber }));
    toast(`${productDetails?.title} has been updated`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      type: "success",
    });
  };

  return (
    <section>
      {loading ? (
        <PageLoader />
      ) : (
        <div className="lg:py-16 py-8 xl:max-w-7xl xl:mx-auto xl:px-8 px-8 ">
          <div className=" grid lg:grid-cols-2 gap-14 ">
            <div className="relative w-full  rounded-sm">
              <img src={productDetails?.images[0]} alt="" className="w-full h-full object-center object-cover" />
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
                <input
                  placeholder="0"
                  value={productNumber}
                  onChange={(e) => {
                    setProductNumber(parseInt(e.target.value));
                  }}
                  type="number"
                  className=" h-8 w-20 border-gray-700 border px-2"
                />
                <button
                  disabled={productNumber === 0}
                  onClick={itemInCart ? updateProductInCart : addProductToCart}
                  className=" h-8 px-4 rounded-sm bg-gray-700 text-sm text-white disabled:opacity-50"
                >
                  {itemInCart ? "Update Cart" : "Add to Cart"}
                </button>
                {itemInCart && (
                  <button onClick={removeProductFromCart} className=" h-8 px-4 rounded-sm bg-red-700 text-sm text-white disabled:opacity-50">
                    Remove
                  </button>
                )}
              </div>
              <p className="text-gray-400 font-extralight text-sm">Category: {productDetails?.category.name}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default SingleProductPage;
