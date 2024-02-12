import React, { useState, useEffect } from "react";
import "../App.css";

const Box = ({ status, onClick }) => {
  return (
    <div
      className={status}
      style={{
        margin: "10px",
        padding: "10px",
        border: "1px solid black",
        textAlign: "center",
      }}
    >
      <div>Status: {status}</div>
      <button onClick={onClick}>Change Status</button>
    </div>
  );
};

const Home = () => {
  const [boxes, setBoxes] = useState([
    { status: "pending", value: null },
    { status: "pending", value: null },
    { status: "pending", value: null },
    { status: "pending", value: null },
  ]);

  const [lastClickedIndex, setLastClickedIndex] = useState(null);
  // console.log("lastClickedIndex", lastClickedIndex);
  // console.log("hello world");

  const handleButtonClick = (index) => {
    setBoxes((prevBoxes) => {
      const newBoxes = prevBoxes.map((box, i) => ({
        ...box,
        status: i === index ? "green" : i === index + 1 ? "yellow" : box.status,
      }));
      setLastClickedIndex(index);
      return newBoxes;
    });
  };
  let a;
  let b;
  console.log("This is a test log."); // Add this line for example
  const unusedVariable = "Unused"; // Add this line for example
  return (
    <div>
      {lastClickedIndex}
      {boxes.map((box, index) => (
        <Box
          key={index}
          status={box.status}
          onClick={() => handleButtonClick(index)}
        />
      ))}
    </div>
  );
};

export default Home;
