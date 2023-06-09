import React from "react";
import TensorflowVisorChart from "../src/TensorflowVisorChart";

function App() {
  return (
    <div
      className="App"
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h2>My App</h2>
      <div style={{ maxWidth: "800px", width: "100%" }}>
        <TensorflowVisorChart />
        <TensorflowVisorChart />
      </div>
    </div>
  );
}

export default App;
