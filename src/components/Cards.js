import React from "react";

const Cards = ({ title, price, desc, category }) => {
  return (
    <div
      style={{
        border: "1px solid black",
        width: "500px",
        display: "flex",
        padding: "10px",
        marginTop: "30px",
      }}
      data-test-id={`menu-item-${category}`}
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
