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
  const [showProductInfo, setShowProductInfo] = useState(false);
  const [showShippingInfo, setShowShippingInfo] = useState(false);

  useEffect(() => {
    if (id) {
      getProduct();
    }
  }, []);

  const getProduct = async () => {
    if (id) {
      const prod = await itemsServices.getItemById(id);
      setProduct(prod[0]);
    }
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
        <ImageCarousel item={product} />
      </section>
      <section className='detailedProdInfoContainer'>
        <div className='detailedProdInfo'>
          <p>{product.title}</p>
          <p>{product.price} $</p>
        </div>
        <div className='detailedProdInfoColors'>{getColorsOfProd}</div>
        <div className='detailedProdInfoQty'>
          <div className='handleQty'>
            <Dash className='qtyHandlers' />{" "}
            <div className='displayQty'>
              <p>0</p>
            </div>{" "}
            <Plus className='qtyHandlers' />
          </div>
          <div className='displayedTotPrice'>200 $</div>
        </div>
        <div className='detailedProdInfoAddToCartButtonContainer'>
          <button
            onMouseEnter={() => setHoverOnAddToCartButton(true)}
            onMouseLeave={() => setHoverOnAddToCartButton(false)}
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
      </section>

      <section className='detailedProdSpecifiedInfoContainer'>
        <div className='specifiedProductInfoContainer'>
          <div
            className='specifiedProductInfoHeaderContainer'
            style={{
              borderBottom: `${
                showProductInfo ? "1px solid #febe8c" : "1px solid grey"
              }`,
            }}
          >
            <h6 className='specifiedProductInfoHeader'>Product Information</h6>

            {showProductInfo ? (
              <ChevronUp
                className='specifiedInfoChevron'
                onClick={() => setShowProductInfo(false)}
              />
            ) : (
              <ChevronDown
                className='specifiedInfoChevron'
                onClick={() => setShowProductInfo(true)}
              />
            )}
          </div>
          {showProductInfo && (
            <div className='specifiedProductInfoText'>
              <p>{product.productInfo}</p>
            </div>
          )}
        </div>

        <div className='specifiedProductInfoContainer'>
          <div
            className='specifiedProductInfoHeaderContainer'
            style={{
              borderBottom: `${
                showShippingInfo ? "1px solid #febe8c" : "1px solid grey"
              }`,
            }}
          >
            <h6 className='specifiedProductInfoHeader'>Shipping And Returns</h6>

            {showShippingInfo ? (
              <ChevronUp
                className='specifiedInfoChevron'
                onClick={() => setShowShippingInfo(false)}
              />
            ) : (
              <ChevronDown
                className='specifiedInfoChevron'
                onClick={() => setShowShippingInfo(true)}
              />
            )}
          </div>
          {showShippingInfo && (
            <div className='specifiedProductInfoText'>
              <p>heeeeej</p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
};
