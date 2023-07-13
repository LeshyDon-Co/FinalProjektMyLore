"use client";

import React from "react";
import styles from "./page.module.css";
import NameOverview from "@/components/overview/name/nameoverview";
import Konva from "konva";
import dynamic from "next/dynamic";

const NoSSRComponent = dynamic(() => import("../../components/worldmapKonva/worldmapkonva.jsx"), {
  ssr: false,
});


function Worldmap() {

  // //Stage:
  // const stage = new Konva.Stage({
  //   container: 'konvaholder',
  //   width: window.innerWidth,
  //   height: window.innerHeight,
  // });

  // //Layer
  // const layer = new Konva.Layer();

  // //Layer der Stage zufügen
  // stage.add(layer);

  // //Shape
  // const circle = new Konva.Circle({
  //   x: stage.width() / 2,
  //   y: stage.height() / 2,
  //   radius: 70,
  //   fill: 'red',
  //   stroke: 'black',
  //   strokeWidth: 4
  // });

  // //Shape dem Layer hinzufügen
  // layer.add(circle);

  // //Draw
  // layer.draw();

  return (
    <NoSSRComponent />
  //   <Stage width={window.innerWidth} height={window.innerHeight}>
  //   <Layer>
  //     <Circle x={200} y={100} radius={50} fill="green" />
  //   </Layer>
  // </Stage>
    // <div className={styles.body}>
    //   <NameOverview />
    //   <div id="konvaholder"></div>
    //   {/* <div className={styles.container}> */}
        
        
    //   {/* </div> */}
    // </div>
  );
}

export default Worldmap;
