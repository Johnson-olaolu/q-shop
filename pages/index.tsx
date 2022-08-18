import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { categoriesService } from "../services/categories";
import { ICategory } from "../services/types";
import { RootState } from "../store";
import { setCategories as reduxSetCategories } from "../store/categoryStore";
import CategoryViewer from "../components/CategoryViewer";

const Home: NextPage = () => {
  const dispatch = useDispatch();
  const [categories, setCategories] = useState<ICategory[]>([]);

  const fetchCategories = async () => {
    const res2 = await categoriesService.fetchAllCategories();
    dispatch(reduxSetCategories(res2));
    setCategories(res2);
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <div>
      <Head>
        <title>Home | Shopper</title>
        <meta name="description" content="shopper" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <main className=" space-y-20">
        {categories
          .filter((c) => c.name !== "add")
          .map((category) => (
            <CategoryViewer key={category.id} category={category} />
          ))}
      </main>
    </div>
  );
};

export default Home;
