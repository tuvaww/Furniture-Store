import { useEffect, useState } from "react";
import { itemsServices } from "../services/itemsServices/itemsServices";
import { IItem } from "../models/items/IItem";
import { Product } from "../components/products/product/Product";
import "../styles/products/products.scss";

export const Products = () => {
  const queryParams = new URLSearchParams(window.location.search);
  const category = queryParams.get("category");
  const [products, setProducts] = useState<IItem[]>([]);

  useEffect(() => {
    if (category) {
      getProducts(category);
    }
  }, [category]);

  const getProducts = async (c: string) => {
    const products = await itemsServices.getItemByType(c);
    setProducts(products);
    console.log("products", products);
  };

  const getLocation = () => {
    const firstLetter = category?.charAt(0);
    const upperCaseFirst = firstLetter?.toLocaleUpperCase();

    const restOfWord = category?.slice(1);

    if (upperCaseFirst && restOfWord) {
      const location = upperCaseFirst + restOfWord;

      return location;
    }
  };

  const productsHTML = products.map((p: IItem, i: number) => {
    //console.log("id", p.id);
    return <Product key={i} product={p} />;
  });

  return (
    <main className='productsMainContainer'>
      <section className='breadCrumbsContainer'>
        <h4 className='breadCrumbs'>{getLocation()}</h4>
      </section>

      <section className='productsContainer'>{productsHTML}</section>
    </main>
  );
};
