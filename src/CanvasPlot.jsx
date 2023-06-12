import React, { useEffect, useRef } from "react";
import XYPlotter from "./XYPlotter"; // Assuming you have the XYPlotter class defined in a separate file

const CanvasPlot = ({ pointSize }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const plotter = new XYPlotter(canvasRef.current);
    plotter.transformXY();
    const xMax = plotter.xMax;
    const yMax = plotter.yMax;
    const xMin = plotter.xMin;
    const yMin = plotter.yMin;

    const numPoints = 1200;
    const xPoints = [];
    const yPoints = [];
    for (let i = 0; i < numPoints; i++) {
      xPoints[i] = Math.random() * xMax;
      yPoints[i] = Math.random() * yMax;
    }

    function f(x) {
      return x * 1.2 + 50;
    }

    plotter.plotLine(xMin, f(xMin), xMax, f(xMax), "black");

    const desired = [];
    for (let i = 0; i < numPoints; i++) {
      desired[i] = 0;
      if (yPoints[i] > f(xPoints[i])) {
        desired[i] = 1;
      }
    }

    for (let i = 0; i < numPoints; i++) {
      let color = "blue";
      if (desired[i]) color = "black";
      plotter.plotPoint(xPoints[i], yPoints[i], color);
    }
  }, []);

  return (
    <div>
      <canvas
        ref={canvasRef}
        width="400px"
        height="400px"
        style={{ width: "100%", maxWidth: "400px", border: "1px solid black" }}
      />
    </div>
  );
};

export default CanvasPlot;
