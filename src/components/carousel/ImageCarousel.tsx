import { Carousel } from "react-bootstrap";
import { IItem } from "../../models/items/IItem";

interface IProps {
  item: IItem;
}
export const ImageCarousel = (props: IProps) => {
  const carouselItem = props.item.images.map((img: string) => {
    return (
      <Carousel.Item key={img}>
        <img
          className='carouselImg'
          style={{ width: "100%" }}
          src={img}
          alt={img}
        />
      </Carousel.Item>
    );
  });

  return (
    <Carousel fade className='carouselWrapper'>
      {carouselItem}
    </Carousel>
  );
};
