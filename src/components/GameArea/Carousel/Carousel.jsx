import CarouselBody from "./CarouselBody.jsx";
import CarouselNav from "./CarouselNav.jsx";
import { useState, useEffect } from "react";
//import { GoTriangleLeft } from "react-icons";

const Carousel = ({ infoData }) => {
  const [activeImg, setActiveImg] = useState("");

  useEffect(() => {
    if (infoData && infoData.length > 0) {
      console.log(infoData);
      setActiveImg(infoData[0].game_img[1]);
    }
  }, [infoData]);

  const handleChange = (url) => {
    console.log(url);
    setActiveImg(url);
  };

  if (!infoData || infoData.length === 0) {
    return <p>Loading...</p>;
  } else {
    return (
      <div id="carousel">
        <CarouselBody activeImg={activeImg} />
        <div id="carouselNav">
          <CarouselNav infoData={infoData} handleChange={handleChange} />
        </div>
        <div id="carousel-scrollbar">
          <div id="left-arrow">{/* <GoTriangleLeft /> */}</div>
          <div id="scroll-slider">
            <div id="slider-handle" className="invisible-scrollbar"></div>
          </div>
          <div id="right-arrow"></div>
        </div>
      </div>
    );
  }
};

export default Carousel;
