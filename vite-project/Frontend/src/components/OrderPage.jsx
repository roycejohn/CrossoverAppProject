import React from "react";

function OrderPage() {
  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold mb-5">Place your Order</h1>
      <form>
        <div>
          <label className="block mb-2 text-sm font-bold text-gray-700">
            Name:
          </label>
          <input
            type="text"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mt-4">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Order
          </button>
        </div>
      </form>
    </div>
  );
}

export default OrderPage;
