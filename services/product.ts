import axios, { AxiosError } from "axios";
import { IProduct } from "./types";

const getSingleProduct = (productId: string): Promise<IProduct> => {
  return axios
    .get(`/api/product/${productId}`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return Promise.reject((err as AxiosError).response);
    });
};

export const productServices = {
  getSingleProduct,
};
