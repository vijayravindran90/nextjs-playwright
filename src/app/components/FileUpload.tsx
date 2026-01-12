'use client';

import { useState, ChangeEvent } from 'react';

export default function FileUpload() {
  const [uploadedFile, setUploadedFile] = useState<string | null>(null);

  const handleFileUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setUploadedFile(file.name);
      alert(`File uploaded: ${file.name}`);
    }
  };

  return (
    <div className="space-y-2">
      <label htmlFor="file-upload" className="block text-sm font-medium text-gray-700">
        File Upload
      </label>
      <input
        id="file-upload"
        type="file"
        onChange={handleFileUpload}
        className="block w-full text-sm text-gray-700 border border-gray-300 rounded-lg cursor-pointer px-4 py-2"
      />
      {uploadedFile && (
        <p className="text-sm text-green-600">Uploaded: {uploadedFile}</p>
      )}
    </div>
  );
}
