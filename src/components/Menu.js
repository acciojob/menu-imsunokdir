import React from "react";

const cStyle = {
  minWidth: "300px",
};

const Menu = ({ items }) => {
  return (
    <div className="menu-items">
      {items.map((menuItem) => {
        const { id, title, img, desc, price, category } = menuItem;
        return (
          <div
            // className="menu-item"
            data-test-id={`menu-item-${category}`}
            key={id}
          >
            <div className="image">
              <img src={img} />
            </div>
            <div className="food-details">
              <div className="title-price">
                <h4>{title}</h4>
                <h4>${price}</h4>
              </div>
              <hr />
              <p className="description">{desc}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Menu;
