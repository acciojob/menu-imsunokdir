import React, { useState } from "react";
import { items } from "./items";
import Cards from "./Cards";

const App = () => {
  const [menuData, setMenuData] = useState(items);
  const [filteredMenuData, setFilteredMenuData] = useState(menuData);
  const handleClick = (category) => {
    setFilteredMenuData(menuData.filter((item) => item.category == category));
  };
  return (
    <div
      style={{
        width: "80vw",
        margin: "auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
      id="main"
    >
      <h1>Our Menu</h1>
      <div>
        <button onClick={() => setFilteredMenuData(menuData)}>All</button>
        <button
          onClick={() => {
            handleClick("breakfast");
          }}
          id="filter-btn-1"
        >
          Breakfast
        </button>
        <button id="filter-btn-2" onClick={() => handleClick("lunch")}>
          Lunch
        </button>
        <button id="filter-btn-3" onClick={() => handleClick("shakes")}>
          Shakes
        </button>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          marginTop: "50px",
          gap: "10px",
        }}
      >
        {filteredMenuData.map((item) => {
          return (
            <Cards
              title={item.title}
              key={item.id}
              price={item.price}
              category={item.category}
              desc={item.desc}
            />
          );
        })}
      </div>
    </div>
  );
};

export default App;
