import React, { useEffect, useRef, useState } from "react";
import "./NavMobile.css";
import navData from "../Nav.json";
import { ReactComponent as AppleLogo } from "../../../assets/apple-icon.svg";
import { ReactComponent as BagIcon } from "../../../assets/bag.svg";
import { ReactComponent as SearchIcon } from "../../../assets/magnifying-glass-solid.svg";
import Dropdown from "../../Dropdown/Dropdown";
import { useOnClickOutside } from "../../../helper";

const NavMobile = () => {
    const [show, setShow] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);
    const ref = useRef();

    useOnClickOutside(ref, () => {
        setShowDropdown(false);
    });

    const handleClick = () => {
        setShow((val) => !val);
    };
    const dropdownHandler = () => {
        setShowDropdown((val) => !val);
    };

    useEffect(() => {
        if (show) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [show]);

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
                <div style={show ? { visibility: "hidden" } : {}}>
                    <div className="nav__mobile__dropdown" ref={ref}>
                        <BagIcon
                            className="nav__icon"
                            height={16}
                            onClick={dropdownHandler}
                        />
                        {showDropdown && !show ? (
                            <Dropdown
                                style={{
                                    position: "absolute",
                                    top: "48px",
                                    left: "0",
                                    right: "0",
                                    width: "100%",
                                }}
                            />
                        ) : null}
                    </div>
                </div>
            </div>

            <div className="nav__mobile__items">
                <div className="nav__mobile__items__item__search">
                    <SearchIcon
                        className="nav__icon nav_mobile_search_icon"
                        height={14}
                    />
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
                            key={`nav-mobile-items-item-${idx}`}
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
