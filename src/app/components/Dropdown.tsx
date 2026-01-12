'use client';

import { useState } from 'react';

export default function Dropdown() {
  const [selectedValue, setSelectedValue] = useState('');

  const options = ['Select an option', 'Apple', 'Banana', 'Orange', 'Mango'];

  return (
    <div className="space-y-2">
      <label htmlFor="dropdown" className="block text-sm font-medium text-gray-700">
        Dropdown
      </label>
      <select
        id="dropdown"
        value={selectedValue}
        onChange={(e) => setSelectedValue(e.target.value)}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
      <p className="text-sm text-gray-600">
        Selected: {selectedValue || 'None'}
      </p>
    </div>
  );
}
