import React from "react";

// const Categories = ({ categories, filterItems }) => {
//   return (
//     <div className="categories">
//       {categories.map((category, i) => {
//         return (
//           <button
//             key={i}
//             className="cat-btn"
//             id={`filter-btn-${i + 1}`}
//             onClick={() => filterItems(category)}
//           >
//             {category}
//           </button>
//         );
//       })}
//     </div>
//   );
// };

// export default Categories;

const Categories = React.memo(({ categories, filterItems }) => {
  return (
    <div className="categories">
      {categories.map((category, i) => (
        <button
          type="button"
          key={i}
          className="cat-btn"
          id={`filter-btn-${i + 1}`}
          onClick={() => filterItems(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
});
export default Categories;
