import { useState } from "react";
import { INavigation } from "../../../../../models/Navigation/INavigation";

interface IProps {
  link: INavigation;
}

export const MenuLinksBigScreen = (props: IProps) => {
  const [onHover, setOnHover] = useState(false);
  const queryParams = new URLSearchParams(window.location.search);
  const category = queryParams.get("category");

  return (
    <div className='menuLinkContainer'>
      <a
        href={props.link.url}
        className='removeDefaultLinkStyle'
        style={{ color: "black" }}
      >
        <h2
          onMouseEnter={() => setOnHover(true)}
          onMouseLeave={() => setOnHover(false)}
          className={`${
            onHover || category === props.link.title
              ? "mainLinkHover"
              : "mainLink"
          } `}
        >
          {props.link.title}
        </h2>
      </a>
    </div>
  );
};
