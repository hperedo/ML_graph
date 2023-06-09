import React, { useEffect, useRef } from "react";
import { useWindowSize } from "react-use";
//import * as tfvis from "@tensorflow/tfjs-vis";
import { render as tfvisRender, Visor } from "@tensorflow/tfjs-vis";

const ResponsiveTensorflowVisorChart = () => {
  const visorRef = useRef(null);
  const windowSize = useWindowSize();

  // const TensorflowVisorChart = () => {
  //   const visorRef = useRef(null);

  useEffect(() => {
    const surface = visorRef.current;

    const data = [
      { index: 0, value: 100, color: "red" },
      { index: 1, value: 200, color: "red" },
      { index: 2, value: 150, color: "red" },
      { index: 3, value: 250, color: "red" },
      { index: 4, value: 550, color: "red" },
    ];

    const data1 = [
      { index: 5, value: 300, color: "blue" },
      { index: 6, value: 400, color: "blue" },
    ];

    const options = {
      width: windowSize.width * 0.8,
      height: 400,
      style: "bar",
      xLabel: "Index",
      yLabel: "Value",
    };

    const newData = [...data, ...data1];

    tfvis.render.barchart(surface, newData, options);
  }, [windowSize]);

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Visor ref={visorRef} />
    </div>
  );
};

export default ResponsiveTensorflowVisorChart;
