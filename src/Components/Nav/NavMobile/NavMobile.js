import React, { useState } from "react";
import "./NavMobile.css";
import navData from "../Nav.json";
import { ReactComponent as AppleLogo } from "../../../assets/apple-icon.svg";
import { ReactComponent as BagIcon } from "../../../assets/bag.svg";
import { ReactComponent as SearchIcon } from "../../../assets/magnifying-glass-solid.svg";

const NavMobile = () => {
    const [show, setShow] = useState(false);
    const handleClick = () => {
        setShow((val) => !val);
    };
    return (
        <div className={`nav__mobile ${show ? "nav_open" : ""}`}>
            <div className="nav__mobile__icons">
                <div className="nav__mobile__icon" onClick={handleClick}>
                    <div className="nav__mobile__icon__line1"></div>
                    <div className="invis"></div>
                    <div className="nav__mobile__icon__line2"></div>
                </div>
                <div>
                    <AppleLogo className="nav__icon" height={16} width={16} />
                </div>
                <div>
                    <BagIcon className="nav__icon" height={16} />
                </div>
            </div>
            <div className="nav__mobile__items">
                <div className="nav__mobile__items__item__search">
                    <SearchIcon className="nav__icon search_icon" height={14} />
                    <input
                        placeholder="Search apple.com"
                        type="text"
                        className="input_search"
                    />
                </div>
                <div className="nav__mobile_line"></div>
                <div className="nav__mobile__items__container">
                    {navData.map((item, idx) => (
                        <div
                            className="nav__mobile__items__container__item"
                            key={`nav-items-item-${idx}`}
                        >
                            <a href="/">{item.name}</a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default NavMobile;
