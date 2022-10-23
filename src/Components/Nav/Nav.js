import React, { useRef, useState } from "react";
import navData from "./Nav.json";
import "./Nav.css";
import { ReactComponent as AppleLogo } from "../../assets/apple-icon.svg";
import { ReactComponent as BagIcon } from "../../assets/bag.svg";
import { ReactComponent as CloseIcon } from "../../assets/close.svg";
import { ReactComponent as SearchIcon } from "../../assets/magnifying-glass-solid.svg";
import Dropdown from "../Dropdown/Dropdown";
import { useOnClickOutside } from "../../helper";

const Nav = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);
  const searchRef = useRef();
  const dropDownRef = useRef();

  useOnClickOutside(searchRef, () => {
    setOpenSearch(false);
  });
  useOnClickOutside(dropDownRef, () => {
    setShowDropdown(false);
  });

  const openSearchHandler = (action) => {
    if (action && action.toLocaleLowerCase() === "open") {
      setOpenSearch(true);
    } else {
      setOpenSearch(false);
    }
  };

  const dropdownHandler = () => {
    setShowDropdown((val) => !val);
  };

  return (
    <div className="nav">
      {openSearch ? (
        <div className="nav__search__root">
          <div className="nav__search" ref={searchRef}>
            <SearchIcon className="nav__icon nav_search_icon" height={14} />
            <input
              placeholder="Search apple.com"
              type="text"
              className="input_search"
            />
            <CloseIcon
              className="nav__icon close_icon"
              height={14}
              onClick={() => openSearchHandler()}
            />
          </div>
        </div>
      ) : (
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
            <SearchIcon
              className="nav__icon"
              height={13}
              onClick={() => openSearchHandler("open")}
            />
          </div>
          <div className="nav__items__item">
            <div className="nav__items__item__dropdown" ref={dropDownRef}>
              {showDropdown ? (
                <Dropdown
                  style={{
                    position: "absolute",
                    top: "36px",
                    right: "-16px",
                    width: "286px",
                  }}
                />
              ) : null}
              <BagIcon
                className="nav__icon"
                height={13}
                onClick={dropdownHandler}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Nav;
