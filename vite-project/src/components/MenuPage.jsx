import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function MenuPage() {
  const [dishes, setDishes] = useState([]);

  useEffect(() => {
    fetch("../../../db.json")
      .then((response) => response.json())
      .then((data) => setDishes(data.dishes))
      .catch((error) => console.error("Error:", error));
  }, []);

  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold mb-5">Menu</h1>

      <div className="grid grid-cols-3 gap-4">
        {dishes.length > 0 &&
          dishes.map((dish) => (
            <div
              key={dish.id}
              className="max-w-sm rounded overflow-hidden shadow-lg"
            >
              <img className="w-full" src={dish.image} alt={dish.name} />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{dish.name}</div>
                <p className="text-gray-700 text-base">
                  Ingredients: {dish.ingredients}
                </p>
                <p className="text-gray-700 text-base">Price: {dish.price}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default MenuPage;
