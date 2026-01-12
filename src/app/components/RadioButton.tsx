'use client';

import { useState } from 'react';

export default function RadioButton() {
  const [selected, setSelected] = useState('option1');

  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700">Radio Button Options</label>
      <div className="space-y-2">
        <div className="flex items-center">
          <input
            type="radio"
            id="option1"
            name="options"
            value="option1"
            checked={selected === 'option1'}
            onChange={(e) => setSelected(e.target.value)}
            className="w-4 h-4 text-blue-600 cursor-pointer"
          />
          <label htmlFor="option1" className="ml-2 text-sm text-gray-700 cursor-pointer">
            Option 1
          </label>
        </div>
        <div className="flex items-center">
          <input
            type="radio"
            id="option2"
            name="options"
            value="option2"
            checked={selected === 'option2'}
            onChange={(e) => setSelected(e.target.value)}
            className="w-4 h-4 text-blue-600 cursor-pointer"
          />
          <label htmlFor="option2" className="ml-2 text-sm text-gray-700 cursor-pointer">
            Option 2
          </label>
        </div>
        <div className="flex items-center">
          <input
            type="radio"
            id="option3"
            name="options"
            value="option3"
            checked={selected === 'option3'}
            onChange={(e) => setSelected(e.target.value)}
            className="w-4 h-4 text-blue-600 cursor-pointer"
          />
          <label htmlFor="option3" className="ml-2 text-sm text-gray-700 cursor-pointer">
            Option 3
          </label>
        </div>
      </div>
      <p className="text-sm text-gray-600">Selected: {selected}</p>
    </div>
  );
}
