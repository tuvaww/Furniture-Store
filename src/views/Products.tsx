import { useEffect, useState } from "react";
import { itemsServices } from "../services/itemsServices/itemsServices";
import { IItem } from "../models/items/IItem";
import { Product } from "../components/products/product/Product";
import "../styles/products/products.scss";

export const Products = () => {
  const queryParams = new URLSearchParams(window.location.search);
  const category = queryParams.get("category");
  const detailedType = queryParams.get("detailedType");

  const [products, setProducts] = useState<IItem[]>([]);

  useEffect(() => {
    if (category && detailedType === "null") {
      getProducts(category);
    } else if (detailedType !== "null" && detailedType) {
      getFilteredProducts(detailedType);
    }
  }, [category, detailedType]);

  const getProducts = async (c: string) => {
    const products = await itemsServices.getItemByType(c);
    setProducts(products);
  };

  const getFilteredProducts = async (d: string) => {
    const products = await itemsServices.getItemByDetailedType(d);
    setProducts(products);
  };

  const getLocation = () => {
    let breadCrumbs = category;

    if (detailedType !== "null") {
      breadCrumbs = breadCrumbs + " / " + detailedType;
    }

    return breadCrumbs;
  };

  const productsHTML = products.map((p: IItem, i: number) => {
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
