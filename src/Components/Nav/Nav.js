import React from "react";
import navData from "./Nav.json";
import "./Nav.css";
import { ReactComponent as AppleLogo } from "../../assets/apple-icon.svg";
import { ReactComponent as BagIcon } from "../../assets/bag.svg";
import { ReactComponent as SearchIcon } from "../../assets/magnifying-glass-solid.svg";

const Nav = () => {
  return (
    <div className="nav">
      <div className="nav__items">
        <div className="nav__items__item">
          <AppleLogo className="nav__icon nav__logo" height={16} width={16} />
        </div>
        {navData.map((item, idx) => (
          <div className="nav__items__item" key={`nav-items-item-${idx}`}>
            {item.name}
          </div>
        ))}
        <div className="nav__items__item">
          <SearchIcon className="nav__icon" height={12} />
        </div>
        <div className="nav__items__item">
          <BagIcon className="nav__icon" height={12} />
        </div>
      </div>
    </div>
  );
};

export default Nav;
