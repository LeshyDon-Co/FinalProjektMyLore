"use client";
import React, { useEffect, useRef } from "react";
import "./charactercard.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function CharacterCard() {
  const slideContainerRef = useRef(null);

  useEffect(() => {
    const slideContainer = slideContainerRef.current;

    // Slick Carousel Initialisierung
    const slick = new window.Slick(slideContainer);

    // Bild ausblenden
    const images = slideContainer.querySelectorAll(".clash-card__image img");
    images.forEach((image) => {
      image.style.display = "none";
    });

    // Beim Wechsel der Folie vor dem Slide
    slick.on("beforeChange", (event, slick, currentSlide, nextSlide) => {
      const currentCard = slideContainer.querySelector(
        `.slick-slide[data-slick-index="${currentSlide}"] .clash-card`
      );
      const currentImage = currentCard.querySelector(".clash-card__image img");
      currentImage.style.display = "none";
    });

    // Beim Wechsel der Folie nach dem Slide
    slick.on("afterChange", (event, slick, currentSlide) => {
      const currentCard = slideContainer.querySelector(
        `.slick-slide[data-slick-index="${currentSlide}"] .clash-card`
      );
      const currentImage = currentCard.querySelector(".clash-card__image img");
      currentImage.style.display = "block";
    });

    // Aufräumen beim Unmount der Komponente
    return () => {
      slick.unslick();
    };
  }, []);

  return (
    <div>
      <div ref={slideContainerRef} className="slide-container">
        <div className="wrapper">
          <div className="clash-card barbarian">
            {/* ...weiterer Code */}
          </div>
          {/* <!-- end clash-card barbarian--> */}
        </div>
        {/* <!-- end wrapper --> */}

        <div className="wrapper">
          <div className="clash-card archer">
            {/* ...weiterer Code */}
          </div>
          {/* <!-- end clash-card archer--> */}
        </div>
        {/* <!-- end wrapper --> */}

        <div className="wrapper">
          <div className="clash-card giant">
            {/* ...weiterer Code */}
          </div>
          {/* <!-- end clash-card giant--> */}
        </div>
      </div>
    </div>
  );
}

export default CharacterCard;
