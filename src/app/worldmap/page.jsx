"use client";

import React from "react";
import styles from "./page.module.css";
import NameOverview from "@/components/overview/name/nameoverview";
import Location from "@/components/overview/location/location";


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

    <div className={styles.body}>
     <div className={styles.nameAndLocation}>
        <div className={styles.name}>
        <NameOverview />
        </div>
        <div className={styles.location}>
        <Location />
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.worldmap}>
        </div>
      </div>
    </div>

  );
}

export default Worldmap;
