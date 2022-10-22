import React from "react";
import Box from "../../Components/Box/Box";
import Nav from "../../Components/Nav/Nav";
import HomeData from "./Home.json";
import "./Home.css";
import Footer from "../../Components/Footer/Footer";
import { useMediaQuery } from "../../helper";
import NavMobile from "../../Components/Nav/NavMobile/NavMobile";

const Home = () => {
  const mobile = useMediaQuery("(max-width: 780px)");

  return (
    <>
      {mobile ? <NavMobile /> : <Nav />}
      <div className="home">
        {HomeData.full.map((data, idx) => (
          <Box data={data} key={`home-box-full-${idx}`} />
        ))}
        <div className="home__items">
          {HomeData.half.map((data, idx) => (
            <div key={`home-box-half-${idx}`}>
              <Box data={data} half />
            </div>
          ))}
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
