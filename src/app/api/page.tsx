'use client';

import { useEffect, useState } from 'react';

interface Product {
  id: number;
  name: string;
  price: number;
  description?: string;
  [key: string]: any;
}

export default function ApiPage() {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch('https://api.predic8.de/shop/v2/products/8');
        if (!response.ok) {
          throw new Error(`API error: ${response.status}`);
        }
        const data = await response.json();
        setProduct(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch product');
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold mb-8">API Content</h1>

      {loading && (
        <div className="flex justify-center items-center py-12">
          <p className="text-lg text-gray-600">Loading...</p>
        </div>
      )}

      {error && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-800">
          <p className="font-semibold">Error</p>
          <p>{error}</p>
        </div>
      )}

      {product && (
        <div className="bg-white border border-gray-200 rounded-lg shadow-md p-8">
          <div className="prose prose-sm max-w-none">
            <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm font-mono border border-gray-700">
              {JSON.stringify(product, null, 2)}
            </pre>
          </div>

          {/* Display common product fields if available */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {product.name && (
              <div>
                <h2 className="text-lg font-semibold text-gray-700">Name</h2>
                <p className="text-gray-900">{product.name}</p>
              </div>
            )}
            {product.price && (
              <div>
                <h2 className="text-lg font-semibold text-gray-700">Price</h2>
                <p className="text-gray-900">${product.price}</p>
              </div>
            )}
            {product.description && (
              <div className="md:col-span-2">
                <h2 className="text-lg font-semibold text-gray-700">Description</h2>
                <p className="text-gray-900">{product.description}</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
