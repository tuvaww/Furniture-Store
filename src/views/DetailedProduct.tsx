import { Button, Modal } from "react-bootstrap";
import { itemsServices } from "../services/itemsServices/itemsServices";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IItem } from "../models/items/IItem";
import {
  ChevronDown,
  ChevronUp,
  Dash,
  Heart,
  Plus,
} from "react-bootstrap-icons";
import "../styles/detailedProduct/detailedProduct.scss";
import { ImageCarousel } from "../components/carousel/ImageCarousel";
import { DetailedInfo } from "../components/detailedProduct/detailedInfo/DetailedInfo";
import { RecomendedProducts } from "../components/detailedProduct/recomendedProducts/RecomendedProducts";
import { handleAddToCart } from "../services/helperFunctions/addToCart/addToCart";
import { ICart } from "../models/cart/ICart";

export const DetailedProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<IItem>({
    colors: [],
    depth: "",
    detailedType: "",
    height: "",
    id: "",
    images: [],
    material: "",
    price: 0,
    productInfo: "",
    title: "",
    type: "",
    uploaded: 0,
    width: "",
  });
  const [hoverOnAddToCartButton, setHoverOnAddToCartButton] = useState(false);
  const [qty, setQty] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    if (id) {
      window.scrollTo(0, 0);
      getProduct();
    }
  }, [id]);

  const getProduct = async () => {
    if (id) {
      const prod = await itemsServices.getItemById(id);
      setProduct(prod[0]);
    }
  };

  const handleQty = (type: string) => {
    if (type === "minus") {
      if (qty - 1 >= 0) {
        setQty(qty - 1);
        setTotalPrice(totalPrice - product.price);
      } else {
        return;
      }
    }
    if (type === "plus") {
      setQty(qty + 1);
      setTotalPrice(totalPrice + product.price);
    }
  };

  const handleAddItemToCart = () => {
    const cartItem: ICart = { item: product, qty: qty };

    handleAddToCart(cartItem);
  };

  const getColorsOfProd = product.colors.map((c: string, i: number) => {
    return (
      <div
        className='softShadow'
        key={i}
        style={{
          borderRadius: "50%",
          backgroundColor: c,
          height: "14px",
          width: "14px",
        }}
      ></div>
    );
  });
  return (
    <main className='detailedProductMain'>
      <section className='detailedProdHeaderContainer'>
        <h4 className='detailedProdHeader'>{product.title} </h4>
        <Heart className='detailedProdHeart' />
      </section>
      <section className='detailedProdCarouselContainer'>
        <ImageCarousel item={product} useBigScreenCarouselItems={true} />
      </section>

      <section className='detailedProdInfoContainer'>
        <div className='detailedProdInfo'>
          <p>{product.title}</p>
          <p>{product.price} $</p>
        </div>
        <div className='detailedProdInfoColors'>{getColorsOfProd}</div>
        <div className='detailedProdInfoQty'>
          <div className='handleQty'>
            <Dash className='qtyHandlers' onClick={() => handleQty("minus")} />{" "}
            <div className='displayQty'>
              <p>{qty}</p>
            </div>{" "}
            <Plus className='qtyHandlers' onClick={() => handleQty("plus")} />
          </div>
          <div className='displayedTotPrice'>{totalPrice} $</div>
        </div>
        <div className='detailedProdInfoAddToCartButtonContainer'>
          <button
            onMouseEnter={() => setHoverOnAddToCartButton(true)}
            onMouseLeave={() => setHoverOnAddToCartButton(false)}
            onClick={handleAddItemToCart}
            style={{
              backgroundColor: `${
                hoverOnAddToCartButton ? "#b5d5c5" : "rgba(181, 213, 197, 0.7)"
              }`,
              color: `${hoverOnAddToCartButton ? "white" : "black"}`,
            }}
            className='addToCartButton'
          >
            ADD TO CART
          </button>
        </div>
        <DetailedInfo productInfo={product.productInfo} />
      </section>

      <RecomendedProducts detiledType={product.detailedType} />
    </main>
  );
};
