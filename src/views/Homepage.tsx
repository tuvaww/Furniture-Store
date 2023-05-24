import { useEffect, useState } from "react";
import { itemsServices } from "../services/itemsServices/itemsServices";
import { IItem } from "../models/items/IItem";
import { ImageCarousel } from "../components/carousel/ImageCarousel";
import "../styles/homepage/homepage.scss";
import { Col, Row } from "react-bootstrap";
import { NewInPreviewCard } from "../components/homepage/newInPreview/NewInPreviewCard";
import { HomepageCategory } from "../components/homepage/categories/HomepageCategory";

export const Homepage = () => {
  const [heroCarouselItem, setHeroCarouselItem] = useState<IItem>({
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
  const [newInPreviewArr, setNewInPreviewArr] = useState<IItem[]>([]);

  useEffect(() => {
    getHeroCarouselItem();
    getNewestItems();
  }, []);

  const getHeroCarouselItem = async () => {
    const heroItem = await itemsServices.getItemById("UmQbuqgLvdw4vq0worLh");

    if (heroItem) {
      setHeroCarouselItem(heroItem);
    }
  };

  const getNewestItems = async () => {
    const data: IItem[] = await itemsServices.getNewItems(10);
    setNewInPreviewArr(data);
  };

  const newInPreviews = newInPreviewArr.map((n: IItem) => {
    return (
      <Col className='newInPreviewCol'>
        <NewInPreviewCard key={n.id} item={n} />
      </Col>
    );
  });

  return (
    <main className='mainHomepageContainer d-flex flex-column align-center'>
      <section className='homepageCarouselContainer'>
        <ImageCarousel item={heroCarouselItem}></ImageCarousel>
      </section>

      <section className='homePageNewInContainer'>
        <Row className='newInPreviewHeadingRow'>
          <Col className='newInPreviewHeadingCol'>
            <h4 className='newInPreviewHeading'>New in</h4>
          </Col>
        </Row>

        <Row className='newInPreviewRow'>{newInPreviews}</Row>
      </section>

      <section className='homepageCategoriesContainer'>
        <HomepageCategory
          title='Furniture'
          url='/'
          img='https://firebasestorage.googleapis.com/v0/b/furniture-store-hobby.appspot.com/o/assets%2Ffurniture.webp?alt=media&token=eaf94a72-ad8f-4a8c-ab0a-ed57b9598147'
        />
      </section>
    </main>
  );
};
