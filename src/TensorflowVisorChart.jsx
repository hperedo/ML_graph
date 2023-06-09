import React, { useEffect, useRef } from "react";
import { render as tfvisRender } from "@tensorflow/tfjs-vis";

const TensorflowVisorChart = () => {
  const chartContainerRef = useRef(null);

  useEffect(() => {
    const surface = chartContainerRef.current;

    const data = [
      { index: 0, value: 100, color: "rgba(255, 0, 0, 0.5)" },
      { index: 1, value: 200, color: "rgba(255, 0, 0, 0.5)" },
      { index: 2, value: 150, color: "rgba(255, 0, 0, 0.5)" },
      { index: 3, value: 250, color: "rgba(255, 0, 0, 0.5)" },
      { index: 4, value: 550, color: "rgba(255, 0, 0, 0.5)" },
    ];

    const data1 = [
      { index: 5, value: 300, color: "rgba(0, 0, 255, 0.5)" },
      { index: 6, value: 400, color: "rgba(0, 0, 255, 0.5)" },
    ];

    const newData = [...data, ...data1];

    tfvisRender.barchart(surface, newData, { colorBy: "color" });
  }, []);

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <div ref={chartContainerRef}></div>
    </div>
  );
};

export default TensorflowVisorChart;
