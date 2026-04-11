// pages/Home.jsx
// Purpose: Home page — hero + meal grid (static data for Phase 1)

import React from "react";
import MealCard from "../components/MealCard";
import { SAMPLE_MEALS } from "../utils/constants";

const Home = () => {
  return (
    <>
      {/* Hero */}
      <div className="text-center mb-14">
        <div className="inline-flex items-center gap-x-2 bg-emerald-100 text-emerald-700 text-sm font-medium px-5 py-2 rounded-3xl mb-6">
          👨‍🍳 Fresh • Healthy • Family-friendly
        </div>
        <h1 className="text-6xl md:text-7xl font-bold tracking-tighter text-gray-900 leading-none">
          Meals for every stage
        </h1>
        <p className="mt-6 text-xl text-gray-600 max-w-lg mx-auto">
          Baby purees, family dinners, drinks &amp; desserts — all in one
          beautiful place.
        </p>
      </div>

      {/* Meals Section */}
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-3xl font-semibold text-gray-900">Our Meals</h2>
        <p className="text-sm text-gray-500">
          4 meals • showing all categories
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {SAMPLE_MEALS.map((meal) => (
          <MealCard key={meal.id} meal={meal} />
        ))}
      </div>
    </>
  );
};

export default Home;
