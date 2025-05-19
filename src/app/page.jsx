'use client';
import { useState } from 'react';

export default function Home() {
  const [products, setProducts] = useState([]);

  const addProduct = () => {
    setProducts((prev) => [
      ...prev,
      { id: Date.now(), description: `Product ${prev.length + 1}` },
    ]);
  };

  const removeProduct = () => {
    setProducts((prev) => prev.slice(0, -1));
  };

  const clearProducts = () => {
    setProducts([]);
  };

  const updateDescription = (id, newDescription) => {
    setProducts((prev) =>
      prev.map((product) =>
        product.id === id ? { ...product, description: newDescription } : product
      )
    );
  };

  return (
    <main className="min-h-screen bg-gray-50 px-4 py-8 flex flex-col items-center">
      <section className="w-full max-w-3xl bg-white rounded-xl shadow-lg p-8 space-y-6">
        {/* Header Info */}
        <div className="text-center space-y-1">
          <h1 className="text-4xl font-bold text-blue-700">Final Exam 343</h1>
          <h2 className="text-2xl font-semibold text-gray-800">Hasan, Ammar</h2>
          <h3 className="text-lg font-medium text-gray-600">Spring 2025</h3>
        </div>

        {/* Certification Intro */}
        <div className="space-y-2 text-center">
          <h1 className="text-2xl font-bold text-blue-700">
            Gain Certification for your Electronic Vehicles Claimed Range!
          </h1>
          <h2 className="text-lg font-medium text-gray-700 underline">
            Use the buttons below to input the amount of products you would like to certify:
          </h2>
        </div>

        {/* Product List */}
        <div className="space-y-3" id="display">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-gray-100 border border-gray-300 rounded-lg p-3 shadow-sm"
            >
              <input
                type="text"
                value={product.description}
                onChange={(e) => updateDescription(product.id, e.target.value)}
                className="w-full bg-white border border-gray-300 rounded-md px-3 py-2 text-red-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={addProduct}
            className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-md shadow font-semibold"
          >
            ➕ Add a product to certify
          </button>
          <button
            onClick={removeProduct}
            className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-md shadow font-semibold"
          >
            ➖ Remove a product
          </button>
          <button
            onClick={clearProducts}
            className="bg-gray-600 hover:bg-gray-700 text-white px-5 py-2 rounded-md shadow font-semibold"
          >
            🔄 Reset products
          </button>
        </div>

        {/* Footer */}
        <p className="text-center text-gray-700 text-lg">
          Contact us at{' '}
          <a
            href="mailto:ammarhio1@yahoo.com"
            className="text-blue-600 underline hover:text-blue-800"
          >
            ammarhio1@yahoo.com
          </a>{' '}
          for any questions.
        </p>
      </section>
    </main>
  );
}
