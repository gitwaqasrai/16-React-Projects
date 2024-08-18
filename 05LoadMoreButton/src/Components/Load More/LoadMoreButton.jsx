/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";

function LoadMoreButton() {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [buttonDisable, setButtonDisable] = useState(false);

  async function fetchProducts() {
    try {
      setLoading(true);
      const res = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${
          count === 0 ? 0 : count * 20
        }`
      );

      const result = await res.json();
      if (products && result.products && result.products.length) {
        setProducts((prevData) => [...prevData, ...result.products]);
        setLoading(false);
      }
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, [count]);

  useEffect(() => {
    if (products.length === 100) {
      setButtonDisable(true);
    }
  }, [products]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-20 text-lg font-medium text-gray-600">
        Loading.....
      </div>
    );
  }

  return (
    <>
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products && products.length
            ? products.map((productItem, index) => (
                <div
                  className="bg-white shadow-lg cursor-pointer rounded-lg overflow-hidden transform transition duration-300 hover:scale-105"
                  key={index}
                >
                  <img
                    className="w-full h-48 object-cover"
                    src={productItem.thumbnail}
                    alt={productItem.title}
                  />
                  <div className="p-4">
                    <p className="text-lg font-semibold text-gray-800">
                      {productItem.title}
                    </p>
                  </div>
                </div>
              ))
            : null}
        </div>
        <div className="flex justify-center mt-8">
          <button
            disabled={buttonDisable}
            onClick={() => setCount(count + 1)}
            className={`px-6 py-2 text-white font-semibold rounded-lg transition-colors duration-300 ${
              buttonDisable
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-500"
            }`}
          >
            {buttonDisable ? "No More Products" : "Load More"}
            {": " + products.length}
          </button>
          <div className=""></div>
        </div>
      </div>
    </>
  );
}

export default LoadMoreButton;
