import { useEffect, useState } from "react";
import { itemsServices } from "../../../services/itemsServices/itemsServices";
import { IItem } from "../../../models/items/IItem";
import { Col, Row } from "react-bootstrap";
import { BagPlus, Heart } from "react-bootstrap-icons";
import "../../../styles/detailedProduct/recomededProducts/recomendedProducts.scss";
import { useNavigate } from "react-router-dom";

interface IProps {
  detiledType: string;
}

export const RecomendedProducts = (props: IProps) => {
  const navigate = useNavigate();

  const [recomendedProducts, setRecomendedProducts] = useState<IItem[]>([]);
  const [hoverOnRecomendedProd, setHoverOnRecomendedProd] = useState(0);

  useEffect(() => {
    if (props.detiledType) {
      getRecomendedProducts();
    }
  }, [props.detiledType]);

  const handleShowProductDetails = (id: string) => {
    navigate(`/products/product/${id}`);
  };

  const getRecomendedProducts = async () => {
    const recomededProdArr = await itemsServices.getRecomendedItems(
      props.detiledType
    );
    setRecomendedProducts(recomededProdArr);
  };

  const recomendedProductsHTML = recomendedProducts.map((product) => {
    return (
      <div
        key={product.id}
        className='recomededProdContainer'
        onMouseEnter={() => setHoverOnRecomendedProd(+product.id)}
        onMouseLeave={() => setHoverOnRecomendedProd(0)}
        onClick={() => handleShowProductDetails(product.id)}
      >
        <div className='recomededProdImgContainer'>
          <Heart className='saveIcon' />
          <BagPlus className='addToCartIcon' />
          <img
            src={product.images[0]}
            alt={product.title}
            className='recomendedProdImg'
            style={{
              opacity: `${hoverOnRecomendedProd === +product.id ? "0.3" : "1"}`,
            }}
          />
        </div>
        <p className='recProdTitle'>{product.title}</p>
      </div>
    );
  });
  return (
    <section className='recomendedProdsMain'>
      <h4>You may also like</h4>
      <div className='recProdsRow'>{recomendedProductsHTML}</div>
    </section>
  );
};
