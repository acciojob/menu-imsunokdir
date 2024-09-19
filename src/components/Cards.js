import React from "react";

const Cards = ({ title, price, desc }) => {
  return (
    <div
      style={{
        border: "1px solid black",
        width: "500px",
        display: "flex",
        padding: "10px",
        marginTop: "30px",
      }}
    >
      <div style={{ border: "1px solid black" }}>
        <img src="" alt="no-image" />
      </div>
      <div>
        <span>{title}</span>
        <span>$ {price}</span>
      </div>
      <div>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default Cards;
