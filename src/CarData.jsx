import React from "react";
import { useDrag, useDrop } from "react-dnd";

// const CarData = ({ car, index, moveCar }) => {
//   const [{ isDragging }, drag] = useDrag({
//     item: { type: "car", index },
//     collect: (monitor) => ({
//       isDragging: monitor.isDragging()
//     })
//   });

//   const [, drop] = useDrop({
//     accept: "car",
//     hover(item, monitor) {
//       if (!ref.current) {
//         return;
//       }
//       const dragIndex = item.index;
//       const hoverIndex = index;
//       if (dragIndex === hoverIndex) {
//         return;
//       }
//       moveCar(dragIndex, hoverIndex);
//       item.index = hoverIndex;
//     }
//   });

//   const opacity = isDragging ? 0.5 : 1;

//   return (
//     <div ref={drag} style={{ opacity }}>
//       {car}
//     </div>
//   );
// };

const CarData = ({ cars }) => {
  return (
    <div>
      <h2>Car Data</h2>
      <table>
        <thead>
          <tr>
            <th>Car</th>
            <th>Make</th>
            <th>Model</th>
            <th>Year</th>
          </tr>
        </thead>
        <tbody>
          {cars.map((car, index) => (
            <tr key={index}>
              <td>{car.Car}</td>
              <td>{car.Make}</td>
              <td>{car.Model}</td>
              <td>{car.Year}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CarData;
