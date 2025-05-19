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
    <>
      {/* Original content */}
      <h1 className="text-4xl font-bold text-blue-700 mb-4">Final Exam 343</h1>
      <h2 className="text-2xl font-semibold text-gray-800 mb-2">Hasan, Ammar</h2>
      <h3 className="text-xl font-medium text-gray-600 mb-6">Spring 2025</h3>

      {/* Converted HTML below */}
      <section className="bg-red-100 p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-blue-700 text-center mb-4">
          Gain Certification for your Electronic Vehicles Claimed Range!
        </h1>

        <h2 className="text-lg font-medium text-gray-700 mb-4 underline text-center">
          Use the Buttons below to input the amount of products you would like to certify:
        </h2>

        <div id="display" className="mb-6 space-y-2">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white p-2 rounded border border-gray-300 shadow-sm"
            >
              <input
                type="text"
                value={product.description}
                onChange={(e) => updateDescription(product.id, e.target.value)}
                className="w-full p-1 border border-gray-300 rounded"
              />
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <button
            onClick={addProduct}
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded shadow"
          >
            Click Here to <b>add</b> a product to certify.
          </button>
          <button
            onClick={removeProduct}
            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded shadow"
          >
            Click Here to <b>remove</b> a product
          </button>
          <button
            onClick={clearProducts}
            className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded shadow"
          >
            <b>Reset</b> amount of products to certify
          </button>
        </div>

        <p className="text-center text-blue-7 text-xl mt-6">
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
    </>
  );
}
