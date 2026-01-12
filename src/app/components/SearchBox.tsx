'use client';

import { useState, FormEvent } from 'react';

export default function SearchBox() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(`Search query: ${searchQuery}`);
    setSearchQuery('');
  };

  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700">Search</label>
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Enter search term..."
          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
