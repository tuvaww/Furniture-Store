import { useState } from "react";
import {
  INavigation,
  INavigationBase,
} from "../../../../../models/Navigation/INavigation";

interface IProps {
  link: INavigation;
}

export const MenuLinksSmallScreen = (props: IProps) => {
  const [showUnderCategory, setShowUnderCategory] = useState(false);

  const underCategoryLinks = props.link.underCategory.map(
    (u: INavigationBase) => {
      return <p className='underCategoryTitle'>{u.title}</p>;
    }
  );
  return (
    <section className='menuModalLinkContainer'>
      <div className='linkUpperLevelContainer'>
        <p className='upperCategoryTitle'>{props.link.title}</p>

        {props.link.underCategory.length ? (
          !showUnderCategory ? (
            <i
              onClick={() => setShowUnderCategory(true)}
              className='bi bi-chevron-down'
            ></i>
          ) : (
            <i
              onClick={() => setShowUnderCategory(false)}
              className='bi bi-chevron-up'
            ></i>
          )
        ) : (
          <></>
        )}
      </div>

      {showUnderCategory && (
        <div className='underCategoryContainer'>{underCategoryLinks} </div>
      )}
    </section>
  );
};
