import React from "react";
import footerData from "./Footer.json";
import "./Footer.css";
import FooterItem from "./FooterItem/FooterItem";

const Footer = () => {
    return (
        <div className="footer">
            <div>
                <p className="footer__text">{footerData.text}</p>

                <div className="footer__items">
                    <div>
                        <FooterItem
                            title="Shop and Learn"
                            data={footerData.data["Shop and Learn"]}
                        />
                    </div>
                    <div>
                        <FooterItem title="Services" data={footerData.data["Services"]} />
                        <FooterItem title="Account" data={footerData.data["Account"]} />
                    </div>
                    <div>
                        <FooterItem
                            title="Apple Store"
                            data={footerData.data["Apple Store"]}
                        />
                    </div>
                    <div>
                        <FooterItem
                            title="For Business"
                            data={footerData.data["For Business"]}
                        />
                        <FooterItem
                            title="For Education"
                            data={footerData.data["For Education"]}
                        />

                        <FooterItem
                            title="For Healthcare"
                            data={footerData.data["For Healthcare"]}
                        />
                        <FooterItem
                            title="For Government"
                            data={footerData.data["For Government"]}
                        />
                    </div>
                    <div>
                        <FooterItem
                            title="Apple Values"
                            data={footerData.data["Apple Values"]}
                        />
                        <FooterItem
                            title="About Apple"
                            data={footerData.data["About Apple"]}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
