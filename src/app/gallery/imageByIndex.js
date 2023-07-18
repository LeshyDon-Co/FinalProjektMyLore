import bild1 from "../../assets/gallery/screenshots/Bildschirmfoto vom 2023-06-15 16-26-04.png";
import bild2 from "../../assets/gallery/screenshots/Bildschirmfoto vom 2023-06-15 16-27-04.png";
import bild3 from "../../assets/gallery/screenshots/Bildschirmfoto vom 2023-06-15 16-27-30.png";
import bild4 from "../../assets/gallery/screenshots/Bildschirmfoto vom 2023-06-15 16-27-59.png";
import bild5 from "../../assets/gallery/screenshots/Bildschirmfoto vom 2023-06-15 16-28-30.png";


export const images = [bild1, bild2, bild3, bild4, bild5]

const imageByIndex = (index) => images[index % images.length]

export default imageByIndex
