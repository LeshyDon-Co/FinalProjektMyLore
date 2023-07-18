'use client';
import React, { useState, useEffect } from "react";
import Image from "next/image";
import galleryLogo from "../../assets/letterings/gallery-schriftzug.png";
import bild1 from "../../assets/gallery/screenshots/Bildschirmfoto vom 2023-06-15 16-26-04.png";
import bild2 from "../../assets/gallery/screenshots/Bildschirmfoto vom 2023-06-15 16-27-04.png";
import bild3 from "../../assets/gallery/screenshots/Bildschirmfoto vom 2023-06-15 16-27-30.png";
import bild4 from "../../assets/gallery/screenshots/Bildschirmfoto vom 2023-06-15 16-27-59.png";
import bild5 from "../../assets/gallery/screenshots/Bildschirmfoto vom 2023-06-15 16-28-30.png";

const Slideshow = ({ images, onFullscreen, onPause }) => {
  const [index, setIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((index + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [autoplay]);

  return (
    <div className="slideshow">
      {images.map((image, i) => (
        <div
          key={i}
          className="slide"
          style={{
            borderRadius: "5px",
            boxShadow: "0 2px 4px 0 rgba(0, 0, 0, 0.1)",
            transition: "all 0.5s ease-in-out",
          }}
        >
          <Image
            src={image}
            alt="slide"
            width={400}
            height={400}
            className={`${styles.bild} rounded`}
          />
        </div>
      ))}
      <div className="controls">
        <button
          className="button"
          onClick={() => setAutoplay(!autoplay)}
          style={{ backgroundColor: "goldenrod" }}
        >
          {autoplay ? "Pause" : "Play"}
        </button>
        <button
          className="button"
          onClick={onFullscreen}
          style={{ backgroundColor: "black" }}
        >
          Fullscreen
        </button>
      </div>
    </div>
  );
};

const styles = {
  bild: {
    width: "100%",
    height: "auto",
  },
};

export default Slideshow;

const images = [
  galleryLogo,
  bild1,
  bild2,
  bild3,
  bild4,
  bild5,
];