import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="text-center p-10">
      <h1 className="text-4xl font-bold">Welcome to our Restaurant!</h1>
      <p className="text-xl mt-5">Discover delishouse Italian Food</p>
      <Link
        to="/menu"
        className="mt-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        See Our Menu!
      </Link>
    </div>
  );
}

export default HomePage;
