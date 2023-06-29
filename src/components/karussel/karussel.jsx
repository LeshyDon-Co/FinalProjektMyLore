import React from "react";
import styles from "page.module.css";
import Image from "next/image";
// import { Carousel, initTE } from "tw-elements";
// import "tw-elements/dist/tailwind-elements.css";
// import "react-responsive-carousel/lib/styles/carousel.min.css";

// Bilder
import galleryLogo from "../../assets/letterings/gallery-schriftzug.png";
import bild1 from "../../assets/gallery/screenshots/Bildschirmfoto vom 2023-06-15 16-26-04.png";
import bild2 from "../../assets/gallery/screenshots/Bildschirmfoto vom 2023-06-15 16-27-04.png";
import bild3 from "../../assets/gallery/screenshots/Bildschirmfoto vom 2023-06-15 16-27-30.png";
import bild4 from "../../assets/gallery/screenshots/Bildschirmfoto vom 2023-06-15 16-27-59.png";
import bild5 from "../../assets/gallery/screenshots/Bildschirmfoto vom 2023-06-15 16-28-30.png";

// Initialisierung für ES Users
// initTE({ Carousel });

function Karussel() {
  return (
    <div className={`${styles.body} flex items-center justify-center`}>
      <div className="max-w-4xl mx-auto p-8 bg-white rounded shadow-lg">
        <Image
          src={galleryLogo}
          alt="Galerie-Schriftzug"
          className={`${styles.schriftzug} mb-4 mt-24`}
          width={600}
          height={200}
        />
        <p className="text-gray-700 mb-8">Screenshots</p>
        {/* <Carousel showArrows={true}> */}
          <div>
            <Image src={bild1} alt="bild1" width={400} height={400} className={`${styles.bild} rounded`} />
          </div>
          <div>
            <Image src={bild2} alt="bild2" width={400} height={400} className={`${styles.bild} rounded`} />
          </div>
          <div>
            <Image src={bild3} alt="bild3" width={400} height={400} className={`${styles.bild} rounded`} />
          </div>
          <div>
            <Image src={bild4} alt="bild4" width={400} height={400} className={`${styles.bild} rounded`} />
          </div>
          <div>
            <Image src={bild5} alt="bild5" width={400} height={400} className={`${styles.bild} rounded`} />
          </div>
        {/* </Carousel> */}
      </div>
    </div>
  );
}

export default Karussel;