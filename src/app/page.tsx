import SearchBox from './components/SearchBox';
import RadioButton from './components/RadioButton';
import Checkbox from './components/Checkbox';
import Dropdown from './components/Dropdown';
import FileUpload from './components/FileUpload';
import FileDownload from './components/FileDownload';
import Popup from './components/Popup';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      <main className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">
          Form Components Demo
        </h1>
        <p className="text-gray-600 mb-8">
          Explore all the available form components below
        </p>
        
        <div className="space-y-8 divide-y divide-gray-200">
          {/* Search Box Section */}
          <div className="pt-6">
            <SearchBox />
          </div>

          {/* Radio Button Section */}
          <div className="pt-6">
            <RadioButton />
          </div>

          {/* Checkbox Section */}
          <div className="pt-6">
            <Checkbox />
          </div>

          {/* Dropdown Section */}
          <div className="pt-6">
            <Dropdown />
          </div>

          {/* File Upload Section */}
          <div className="pt-6">
            <FileUpload />
          </div>

          {/* File Download Section */}
          <div className="pt-6">
            <FileDownload />
          </div>

          {/* Popup Section */}
          <div className="pt-6">
            <Popup />
          </div>
        </div>
      </main>
    </div>
  );
}
