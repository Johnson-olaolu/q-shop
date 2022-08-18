import axios, { AxiosError } from "axios";
import { ICategory, IProduct } from "./types";

const fetchAllCategories = (): Promise<ICategory[]> => {
  return axios
    .get("/api/categories")
    .then((res) => {
      return res.data;
    })
    .catch((err: AxiosError) => {
      return Promise.reject(err.response);
    });
};

const getCategoryProducts = (categoryId: number): Promise<IProduct[]> => {
  return axios
    .get(`/api/categories/${categoryId}`)
    .then((res) => {
      return res.data;
    })
    .catch((err: AxiosError) => {
      return Promise.reject(err.response);
    });
};

export const categoriesService = {
  fetchAllCategories,
  getCategoryProducts,
};
