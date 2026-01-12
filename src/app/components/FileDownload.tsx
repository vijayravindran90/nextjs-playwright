'use client';

export default function FileDownload() {
  const handleDownload = () => {
    const content = 'This is a sample file for download.\n\nCreated by Next.js App';
    const element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(content));
    element.setAttribute('download', 'sample.txt');
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700">File Download</label>
      <button
        onClick={handleDownload}
        className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
      >
        Download Sample File
      </button>
    </div>
  );
}
