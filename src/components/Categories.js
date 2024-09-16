import React from "react";

const Categories = ({ categories, filterItems }) => {
  return (
    <div className="categories">
      {categories.map((category, i) => {
        return (
          <button
            key={i}
            className="cat-btn"
            onClick={() => filterItems(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
