import React, { useState } from "react";
import CarData from "../src/CarData.jsx";

const CarList = ({ cars }) => {
  const [carList, setCarList] = useState(cars);

  const moveCar = (dragIndex, hoverIndex) => {
    const draggedCar = carList[dragIndex];
    const newCarList = [...carList];
    newCarList.splice(dragIndex, 1);
    newCarList.splice(hoverIndex, 0, draggedCar);
    setCarList(newCarList);
  };

  return (
    <div>
      {carList.map((car, index) => (
        <CarData key={car} car={car} index={index} moveCar={moveCar} />
      ))}
    </div>
  );
};

export default CarList;
