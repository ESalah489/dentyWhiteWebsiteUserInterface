// // import React, { useEffect, useState } from "react";
// // import axiosInstance from "../../api/axiosInstance";

// // const CategorySidebar = ({ selectedCategory, onSelectCategory }) => {
// //   const [categories, setCategories] = useState([]);
// //   const [hoveredId, setHoveredId] = useState(null);

// //   useEffect(() => {
// //     const getCategories = async () => {
// //       try {
// //         const { data } = await axiosInstance.get("/category");
// //         setCategories(data);
// //       } catch (error) {
// //         console.error("Failed to fetch categories:", error);
// //       }
// //     };

// //     getCategories();
// //   }, []);

// //   return (
// //     <div className="bg-white p-4 shadow-md rounded-md">
// //       <h3 className="text-lg font-semibold mb-4 text-primary">Categories</h3>
// //       <ul className="space-y-2 relative">
// //         <li
// //           onClick={() => onSelectCategory("")}
// //           className={`cursor-pointer hover:text-primary ${
// //             selectedCategory === "" ? "font-bold text-primary" : ""
// //           }`}
// //         >
// //           All
// //         </li>

// //         {categories.map((cat) => (
// //           <li
// //             key={cat._id}
// //             onClick={() => onSelectCategory(cat._id)}
// //             onMouseEnter={() => setHoveredId(cat._id)}
// //             onMouseLeave={() => setHoveredId(null)}
// //             className={`relative cursor-pointer hover:text-primary ${
// //               selectedCategory === cat._id ? "font-bold text-primary" : ""
// //             }`}
// //           >
// //             {cat.name}

// //             {/* Tooltip */}
// //             {hoveredId === cat._id && (
// //               <div className="absolute left-full top-1/2 transform -translate-y-1/2 ml-3 bg-gray-700 text-white text-sm px-3 py-2 rounded-md shadow-lg w-52 z-50">
// //                 {cat.description || "No description available"}
// //               </div>
// //             )}
// //           </li>
// //         ))}
// //       </ul>
// //     </div>
// //   );
// // };

// // export default CategorySidebar;


// import React, { useEffect, useState } from "react";
// import axiosInstance from "../../api/axiosInstance";

// const CategorySidebar = ({ selectedCategories = [], onSelectCategories }) => {
//   const [categories, setCategories] = useState([]);
//   const [hoveredId, setHoveredId] = useState(null);

//   useEffect(() => {
//     const getCategories = async () => {
//       try {
//         const { data } = await axiosInstance.get("/category");
//         setCategories(data);
//       } catch (error) {
//         console.error("Failed to fetch categories:", error);
//       }
//     };

//     getCategories();
//   }, []);

//   const handleCategoryChange = (categoryId) => {
//     if (categoryId === "") {
//       // If "All" is selected, clear other selections
//       onSelectCategories([""]);
//     } else {
//       let newSelected;
      
//       if (selectedCategories.includes(categoryId)) {
//         // Remove category if already selected
//         newSelected = selectedCategories.filter(id => id !== categoryId);
//       } else {
//         // Add category and ensure "All" is not selected
//         newSelected = [...selectedCategories.filter(id => id !== ""), categoryId];
//       }

//       // If nothing is selected, default to "All"
//       if (newSelected.length === 0) {
//         newSelected = [""];
//       }

//       onSelectCategories(newSelected);
//     }
//   };

//   return (
//     <div className="bg-white p-4 shadow-md rounded-md">
//       <h3 className="text-lg font-semibold mb-4 text-primary">Categories</h3>
//       <ul className="space-y-2">
//         <li className="flex items-center group relative">
//           <input
//             type="checkbox"
//             id="all-categories"
//             checked={selectedCategories.includes("")}
//             onChange={() => handleCategoryChange("")}
//             className="mr-2 h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
//           />
//           <label 
//             htmlFor="all-categories"
//             className="cursor-pointer hover:text-primary"
//           >
//             All
//           </label>
//         </li>

//         {categories.map((cat) => (
//           <li 
//             key={cat._id}
//             className="flex items-center group relative"
//             onMouseEnter={() => setHoveredId(cat._id)}
//             onMouseLeave={() => setHoveredId(null)}
//           >
//             <input
//               type="checkbox"
//               id={`category-${cat._id}`}
//               checked={selectedCategories.includes(cat._id)}
//               onChange={() => handleCategoryChange(cat._id)}
//               disabled={selectedCategories.includes("")}
//               className={`mr-2 h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary ${
//                 selectedCategories.includes("") ? "opacity-50 cursor-not-allowed" : ""
//               }`}
//             />
//             <label 
//               htmlFor={`category-${cat._id}`}
//               className={`cursor-pointer hover:text-primary ${
//                 selectedCategories.includes("") ? "opacity-50 cursor-not-allowed" : ""
//               }`}
//             >
//               {cat.name}
//             </label>

//             {/* Tooltip that appears on hover */}
//             {(hoveredId === cat._id || selectedCategories.includes(cat._id)) && (
//               <div className={`absolute left-full top-0 ml-2 bg-gray-800 text-white text-sm px-3 py-2 rounded-md shadow-lg w-52 z-50 ${
//                 selectedCategories.includes(cat._id) ? "block" : "hidden group-hover:block"
//               }`}>
//                 {cat.description || "No description available"}
//               </div>
//             )}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default CategorySidebar;

import React, { useEffect, useState } from "react";
import axiosInstance from "../../api/axiosInstance";

const CategorySidebar = ({ selectedCategory = "", onSelectCategory }) => {
  const [categories, setCategories] = useState([]);
  const [hoveredId, setHoveredId] = useState(null);

  useEffect(() => {
    const getCategories = async () => {
      try {
        const { data } = await axiosInstance.get("/category");
        setCategories(data);
      } catch (error) {
        console.error("Failed to fetch categories:", error);
      }
    };

    getCategories();
  }, []);

  const handleCategorySelect = (categoryId) => {
    onSelectCategory(categoryId); // Immediately trigger filtering
  };

  return (
    <div className="space-y-2">
      <h3 className="text-lg font-semibold mb-2 text-primary">Categories</h3>
      <ul className="space-y-1">
        <li 
          className="flex items-center group relative"
          onMouseEnter={() => setHoveredId("all")}
          onMouseLeave={() => setHoveredId(null)}
        >
          <input
            type="radio"
            id="all-categories"
            name="category-selection"
            checked={selectedCategory === ""}
            onChange={() => handleCategorySelect("")}
            className="mr-2 h-4 w-4 text-primary focus:ring-primary"
          />
          <label 
            htmlFor="all-categories"
            className="cursor-pointer hover:text-primary"
          >
            All Categories
          </label>
        </li>

        {categories.map((cat) => (
          <li 
            key={cat._id}
            className="flex items-center group relative"
            onMouseEnter={() => setHoveredId(cat._id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            <input
              type="radio"
              id={`category-${cat._id}`}
              name="category-selection"
              checked={selectedCategory === cat._id}
              onChange={() => handleCategorySelect(cat._id)}
              className="mr-2 h-4 w-4 text-primary focus:ring-primary"
            />
            <label 
              htmlFor={`category-${cat._id}`}
              className={`cursor-pointer hover:text-primary ${
                selectedCategory === cat._id ? "font-semibold text-primary" : ""
              }`}
            >
              {cat.name}
            </label>

            {/* Tooltip that appears on hover */}
            {(hoveredId === cat._id || selectedCategory === cat._id) && (
              <div className={`absolute left-full top-0 ml-2 bg-gray-800 text-white text-sm px-3 py-2 rounded-md shadow-lg w-52 z-50 ${
                selectedCategory === cat._id ? "block" : "hidden group-hover:block"
              }`}>
                {cat.description || "No description available"}
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategorySidebar;