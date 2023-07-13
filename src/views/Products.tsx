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
    return <Product key={i} product={p} />;
  });

  return (
    <main className='productsMainContainer'>
      <section className='breadCrumbsContainer'>
        <h4 className='breadCrumbs'>{getLocation()}</h4>
      </section>
      <section className='categoriesContainer'>
        {/*   <div className='categorySection'>
          <img
            src='https://firebasestorage.googleapis.com/v0/b/furniture-store-hobby.appspot.com/o/assets%2Ffurniture.webp?alt=media&token=eaf94a72-ad8f-4a8c-ab0a-ed57b9598147&_gl=1*mcjjyv*_ga*NDcwNjE0NTUxLjE2ODQ5NDAzMTE.*_ga_CW55HF8NVT*MTY4NjA1ODgwOC4xMS4xLjE2ODYwNTg4MjMuMC4wLjA.'
            alt=''
          />

          <p>Tables</p>
        </div>

        <div className='categorySection'>
          <img
            src='https://firebasestorage.googleapis.com/v0/b/furniture-store-hobby.appspot.com/o/assets%2Ffurniture.webp?alt=media&token=eaf94a72-ad8f-4a8c-ab0a-ed57b9598147&_gl=1*mcjjyv*_ga*NDcwNjE0NTUxLjE2ODQ5NDAzMTE.*_ga_CW55HF8NVT*MTY4NjA1ODgwOC4xMS4xLjE2ODYwNTg4MjMuMC4wLjA.'
            alt=''
          />

          <p>Tables</p>
        </div>
        <div className='categorySection'>
          <img
            src='https://firebasestorage.googleapis.com/v0/b/furniture-store-hobby.appspot.com/o/assets%2Ffurniture.webp?alt=media&token=eaf94a72-ad8f-4a8c-ab0a-ed57b9598147&_gl=1*mcjjyv*_ga*NDcwNjE0NTUxLjE2ODQ5NDAzMTE.*_ga_CW55HF8NVT*MTY4NjA1ODgwOC4xMS4xLjE2ODYwNTg4MjMuMC4wLjA.'
            alt=''
          />

        </div> */}
        {/* <p>Chairs</p>
        <p>Sofas</p>
        <p>Tv Benches</p>
        <p>Tables</p> */}
      </section>

      <section className='productsContainer'>{productsHTML}</section>
    </main>
  );
};
