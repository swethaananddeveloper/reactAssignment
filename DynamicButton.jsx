import React, { useState } from "react";

function DynamicButton() {
  const colors = ["blue", "green", "red", "purple", "orange", "hotpink"];
  const [index, setIndex] = useState(0);

  const changeColor = () => {
    setIndex((prev) => (prev + 1) % colors.length);
  };

  return (
    <div>
      <h2>Dynamic Styling Based on State</h2>
      <button
        onClick={changeColor}
        style={{
          color: "white",
          backgroundColor: colors[index],
          padding: "10px 20px",
          border: "none",
          cursor: "pointer",
        }}
      >
        Click me
      </button>
    </div>
  );
}

export default DynamicButton;
