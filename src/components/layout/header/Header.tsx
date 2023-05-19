import { useState } from "react";
import {
  INavigation,
  INavigationBase,
} from "../../../models/Navigation/INavigation";
import "../../../styles/layout/header/header.scss";
import { MenuLinksBigScreen } from "./menu/menuLinks/MenuLinksBigScreen";
import { MenuModal } from "./menu/smallScreenMenu/MenuModal";
import { menuLinks } from "./menuLinks";
import { SearchBar } from "./searchBar/SearchBar";

export const Header = () => {
  const [showMenuModal, setShowMenuModal] = useState(false);

  const menuLinksJSX = menuLinks.map((l: INavigation, i: number) => {
    return <MenuLinksBigScreen link={l} key={i} />;
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
            <i className='bi bi-person'></i>
            <i className='bi bi-heart'></i>
            <i className='bi bi-basket'></i>
          </section>
        </div>

        <div className='secondRow'>
          <section className='searchBarContainer'>
            <SearchBar />
          </section>

          <section className='bigScreenMenuContainer'>{menuLinksJSX}</section>
        </div>
      </header>
    </>
  );
};
