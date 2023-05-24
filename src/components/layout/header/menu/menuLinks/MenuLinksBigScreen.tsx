import { useState } from "react";
import { INavigation } from "../../../../../models/Navigation/INavigation";

interface IProps {
  link: INavigation;
}

export const MenuLinksBigScreen = (props: IProps) => {
  const [onHover, setOnHover] = useState(false);
  return (
    <div className='menuLinkContainer'>
      <h2
        onMouseEnter={() => setOnHover(true)}
        onMouseLeave={() => setOnHover(false)}
        className={`${onHover ? "mainLinkHover" : "mainLink"}`}
      >
        {props.link.title}
      </h2>

      {/*  {l.underCategory.map((u: INavigationBase) => {
          return (
            <div className='underCategoryContainer'>
              <p>{u.title}</p>
            </div>
          );
        })} */}
    </div>
  );
};
