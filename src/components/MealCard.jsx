// Component: MealCard
// Purpose: Reusable card to display a meal (image, title, category, price, hover animation) - Tailwind v4

import React from "react";

const MealCard = ({ meal }) => {
  return (
    <div className="group bg-white rounded-3xl overflow-hidden meal-card-shadow hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
      <div className="relative">
        <img
          src={meal.image}
          alt={meal.title}
          className="w-full h-52 object-cover transition-transform group-hover:scale-105 duration-500"
        />
        <div className="absolute top-4 right-4 px-3 py-1 text-xs font-semibold bg-white/90 backdrop-blur-md text-emerald-700 rounded-3xl shadow">
          {meal.category}
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 line-clamp-2 leading-tight">
          {meal.title}
        </h3>
        <p className="mt-3 text-sm text-gray-600 line-clamp-3">
          {meal.description}
        </p>

        <div className="mt-6 flex items-center justify-between">
          {meal.price && (
            <div className="text-emerald-600 font-semibold text-lg">
              ${meal.price.toFixed(2)}
            </div>
          )}
          <div className="text-xs text-gray-500">
            {new Date(meal.createdAt).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MealCard;
