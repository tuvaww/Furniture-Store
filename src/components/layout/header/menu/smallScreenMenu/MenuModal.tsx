import { INavigation } from "../../../../../models/Navigation/INavigation";
import { menuLinks } from "../../menuLinks";
import { MenuLinksSmallScreen } from "../menuLinks/MenuLinksSmallScreen";
import "../../../../../styles/layout/header/menuModal.scss";

interface IProps {
  show: boolean;
  close: () => void;
}

export const MenuModal = (props: IProps) => {
  const menuLinksJSX = menuLinks.map((l: INavigation, i: number) => {
    return <MenuLinksSmallScreen key={i} link={l} />;
  });
  return (
    <section className={`${props.show ? "menuModal" : "hideMenuModal"}`}>
      <div className='headingMenuModalContainer'>
        <h4 className='menuModalHeading'>Menu</h4>{" "}
        <i onClick={props.close} className='bi bi-x-lg'></i>
      </div>
      <div className='menuModalLinksContainer'>{menuLinksJSX}</div>
    </section>
  );
};
