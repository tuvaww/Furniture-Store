import { useState } from "react";
import { ChevronDown, ChevronUp } from "react-bootstrap-icons";

interface IProps {
  productInfo: string;
}

export const DetailedInfo = (props: IProps) => {
  const [showProductInfo, setShowProductInfo] = useState(false);
  const [showShippingInfo, setShowShippingInfo] = useState(false);
  const [showMaterialsInfo, setShowMaterialsInfo] = useState(false);

  return (
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
              onClick={() => {
                setShowShippingInfo(false);
                setShowMaterialsInfo(false);
                setShowProductInfo(true);
              }}
            />
          )}
        </div>
        {showProductInfo && (
          <div className='specifiedProductInfoText'>
            <p>{props.productInfo}</p>
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
              onClick={() => {
                setShowShippingInfo(true);
                setShowMaterialsInfo(false);
                setShowProductInfo(false);
              }}
            />
          )}
        </div>
        {showShippingInfo && (
          <div className='specifiedProductInfoText'>
            <p>
              If upon receiving your purchase the items do not convince you, you
              can return them. You have a withdrawal period of 14 days. We
              extend the return period to 30 calendar days for purchases made
              between 11/18/2022 and 01/31/2023. Clicking here you will find all
              the information about returns.
            </p>
          </div>
        )}
      </div>

      <div className='specifiedProductInfoContainer'>
        <div
          className='specifiedProductInfoHeaderContainer'
          style={{
            borderBottom: "none",
          }}
        >
          <h6 className='specifiedProductInfoHeader'>Materials And Design</h6>

          {showMaterialsInfo ? (
            <ChevronUp
              className='specifiedInfoChevron'
              onClick={() => setShowMaterialsInfo(false)}
            />
          ) : (
            <ChevronDown
              className='specifiedInfoChevron'
              onClick={() => {
                setShowShippingInfo(false);
                setShowProductInfo(false);

                setShowMaterialsInfo(true);
              }}
            />
          )}
        </div>
        {showMaterialsInfo && (
          <div className='specifiedProductInfoText'>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};
