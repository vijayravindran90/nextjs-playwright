'use client';

import { useState } from 'react';

export default function Checkbox() {
  const [checkedItems, setCheckedItems] = useState({
    item1: false,
    item2: false,
    item3: false,
  });

  const handleChange = (key: string) => {
    setCheckedItems((prev) => ({
      ...prev,
      [key]: !prev[key as keyof typeof checkedItems],
    }));
  };

  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700">Checkbox Options</label>
      <div className="space-y-2">
        <div className="flex items-center">
          <input
            type="checkbox"
            id="item1"
            checked={checkedItems.item1}
            onChange={() => handleChange('item1')}
            className="w-4 h-4 text-blue-600 cursor-pointer"
          />
          <label htmlFor="item1" className="ml-2 text-sm text-gray-700 cursor-pointer">
            Item 1
          </label>
        </div>
        <div className="flex items-center">
          <input
            type="checkbox"
            id="item2"
            checked={checkedItems.item2}
            onChange={() => handleChange('item2')}
            className="w-4 h-4 text-blue-600 cursor-pointer"
          />
          <label htmlFor="item2" className="ml-2 text-sm text-gray-700 cursor-pointer">
            Item 2
          </label>
        </div>
        <div className="flex items-center">
          <input
            type="checkbox"
            id="item3"
            checked={checkedItems.item3}
            onChange={() => handleChange('item3')}
            className="w-4 h-4 text-blue-600 cursor-pointer"
          />
          <label htmlFor="item3" className="ml-2 text-sm text-gray-700 cursor-pointer">
            Item 3
          </label>
        </div>
      </div>
      <p className="text-sm text-gray-600">
        Checked: {Object.entries(checkedItems).filter(([, v]) => v).map(([k]) => k).join(', ') || 'None'}
      </p>
    </div>
  );
}
