import { Carousel } from "react-bootstrap";
import { IItem } from "../../models/items/IItem";
import { useState } from "react";

interface IProps {
  item: IItem;
  useBigScreenCarouselItems: boolean;
}
export const ImageCarousel = (props: IProps) => {
  const [index, setIndex] = useState(0);
  const [hoverOnBigScreenImg, setHoverOnBigScreenImg] = useState(-1);

  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex);
  };

  const carouselItem = props.item.images.map((img: string) => {
    return (
      <Carousel.Item key={img} className='carouselItem'>
        <img
          className='carouselImg'
          style={{ width: "100%" }}
          src={img}
          alt={img}
        />
      </Carousel.Item>
    );
  });

  const bigScreenCarouselItems = props.item.images.map(
    (img: string, i: number) => {
      return (
        <img
          key={i}
          onClick={() => setIndex(i)}
          className='bigScreenCarouselImg'
          src={img}
          alt={img}
          onMouseEnter={() => setHoverOnBigScreenImg(i)}
          onMouseLeave={() => setHoverOnBigScreenImg(-1)}
          style={{ opacity: `${hoverOnBigScreenImg === i ? "0.3" : "1"}` }}
        />
      );
    }
  );

  return (
    <>
      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        fade
        className='carouselWrapper'
      >
        {carouselItem}
      </Carousel>

      {props.useBigScreenCarouselItems && (
        <div className='bigScreenCarouselImagesContainer'>
          {bigScreenCarouselItems}
        </div>
      )}
    </>
  );
};
