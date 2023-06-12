import React, { useState } from "react";
import CSVReader from "react-csv-reader";
import CarData from "./CarData";

const CarImport = () => {
  const [cars, setCars] = useState([]);

  const handleFileUpload = (data) => {
    setCars(data);
  };

  return (
    <div>
      <h2>Car Import</h2>
      <CSVReader onFileLoaded={handleFileUpload} encoding="ascii" />
      {cars.length > 0 && <CarData cars={cars} />}
    </div>
  );
};
export default CarImport;
