import { useEffect, useState } from "react";
import {
  INavigation,
  INavigationBase,
} from "../../../models/Navigation/INavigation";
import "../../../styles/layout/header/header.scss";
import { MenuLinksBigScreen } from "./menu/menuLinks/MenuLinksBigScreen";
import { MenuModal } from "./menu/smallScreenMenu/MenuModal";
import { menuLinks } from "./menuLinks";
import { SearchBar } from "./searchBar/SearchBar";
import { Bag, Heart, Person } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const [showMenuModal, setShowMenuModal] = useState(false);
  const queryParams = new URLSearchParams(window.location.search);
  const category = queryParams.get("category");
  const [underCategories, setUnderCategories] = useState<INavigationBase[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    menuLinks.map((l: INavigation) => {
      if (l.title === category) {
        setUnderCategories(l.underCategory);
      }
    });
  }, [category]);

  const menuLinksJSX = menuLinks.map((l: INavigation, i: number) => {
    return <MenuLinksBigScreen link={l} key={i} />;
  });

  const underCategoriesJSX = underCategories.map((underCategory) => {
    if (underCategories.length) {
      return (
        <a
          href={underCategory.url}
          key={underCategory.url}
          className='underCategoryWrapper'
        >
          <i className={underCategory.icon}></i>
          <p className='underCategoryTitle'>{underCategory.title}</p>
        </a>
      );
    } else {
      return;
    }
  });

  return (
    <>
      <MenuModal show={showMenuModal} close={() => setShowMenuModal(false)} />
      <header>
        <div className='firstRow'>
          <section className='logoMenuContainer'>
            <article
              onClick={() => setShowMenuModal(true)}
              className='hamburgerContainer'
            >
              <div className='hamburger'></div>
              <div className='hamburger'></div>
              <div className='hamburger'></div>
            </article>

            <article className='logoContainer'>
              <h1>LYCKA</h1>
            </article>

            <article className='searchBarContainer'>
              <SearchBar />{" "}
            </article>
          </section>

          <section className='iconsContainer'>
            <Person className='bi bi-person' />
            <Heart className='bi bi-heart' />
            <Bag className='bi' onClick={() => navigate("/cart")} />
          </section>
        </div>

        <div className='secondRow'>
          <section className='searchBarContainer'>
            <SearchBar />
          </section>

          <section className='bigScreenMenuContainer'>
            <div className='bigScreenMenuLinksContainer'>{menuLinksJSX}</div>

            <div className='bigScreenMenuUnderCategoriesContainer'>
              {underCategoriesJSX}
            </div>
          </section>
        </div>
      </header>
    </>
  );
};
