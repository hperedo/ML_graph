import React from "react";
import TensorflowVisorChart from "../src/TensorflowVisorChart.jsx";
import CanvasPlot from "../src/CanvasPlot.jsx";
import CarList from "../src/CarList.jsx";
import CarImport from "../src/CarImport.jsx";

function App() {
  const cars = ["Car 1", "Car 2", "Car 3", "Car 4", "Car 5"];
  return (
    <div
      className="App"
      style={{
        fontSize: "60px",
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h2>My App</h2>
      <div style={{ maxWidth: "100%", width: "100%" }}>
        <TensorflowVisorChart />
        <hr></hr>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <CanvasPlot pointSize={20} />
        </div>

        <hr></hr>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <CanvasPlot pointSize={20} />
        </div>
      </div>
    </div>
  );
}

export default App;
