import React from "react";
import "./FooterItem.css";

const FooterItem = ({ title, data }) => {
    return (
        <div className="footer__item">
            <h4>{title}</h4>
            <ul>
                {data.map((item, idx) => (
                    <li key={`footer-item-${title}-${idx}`}>
                        <a href="/">{item}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FooterItem;
