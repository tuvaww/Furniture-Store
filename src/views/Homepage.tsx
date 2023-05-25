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
        <HomepageCategory
          title='Exterior'
          url='/'
          img='https://firebasestorage.googleapis.com/v0/b/furniture-store-hobby.appspot.com/o/assets%2Fexterior.jpeg?alt=media&token=12a2fdac-89a6-4076-ba09-067d2922103a'
        />
        <HomepageCategory
          title='Storage'
          url='/'
          img='https://firebasestorage.googleapis.com/v0/b/furniture-store-hobby.appspot.com/o/assets%2Fstorage.webp?alt=media&token=f00ecd08-6bc1-416e-b1d4-3b3484305d38'
        />
        <HomepageCategory
          title='Lighting'
          url='/'
          img='https://firebasestorage.googleapis.com/v0/b/furniture-store-hobby.appspot.com/o/assets%2Flighting.webp?alt=media&token=1e0f73c7-28e4-4bcd-aa12-0761c4f0af1e'
        />
        <HomepageCategory
          title='Textile'
          url='/'
          img='https://firebasestorage.googleapis.com/v0/b/furniture-store-hobby.appspot.com/o/assets%2Ftextile.jpeg?alt=media&token=1325456f-e125-43e1-bcb4-9598e914074f'
        />
        <HomepageCategory
          title='Decorations'
          url='/'
          img='https://firebasestorage.googleapis.com/v0/b/furniture-store-hobby.appspot.com/o/assets%2Fdecorations.webp?alt=media&token=46a94478-228c-4505-9e68-56709bd0fc1f'
        />
      </section>
    </main>
  );
};
