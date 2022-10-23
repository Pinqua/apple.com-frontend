import React from "react";
import DropdownData from "./Dropdown.json";
import "./Dropdown.css";

const Dropdown = React.forwardRef(({ style }, ref) => (
  <div className="dropdown" style={style} ref={ref}>
    <p className="dropdown__msg">Your Bag is empty.</p>
    <div className="dropdown__items">
      {DropdownData.map((item, idx) => (
        <a href={item.link} key={`dropdown-items-item-${item.name}-${idx}`}>
          <div className="dropdown__items__item">
            <img
              className="dropdown__items__item__icon"
              src={item.icon}
              alt=""
            />
            <div className="dropdown__items__item__label">{item.name}</div>
          </div>
        </a>
      ))}
    </div>
  </div>
));

export default Dropdown;
