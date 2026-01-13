'use client';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-gray-300 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">MyApp</h3>
            <p className="text-sm">
              A modern form components demonstration application.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/nextjs-playwright" className="hover:text-white transition">
                  Home
                </a>
              </li>
              <li>
                <a href="/nextjs-playwright/api" className="hover:text-white transition">
                  API
                </a>
              </li>
              <li>
                <a href="/nextjs-playwright/login" className="hover:text-white transition">
                  Login
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  About
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <p className="text-sm">Email: info@myapp.com</p>
            <p className="text-sm">Phone: (123) 456-7890</p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-8">
          <p className="text-center text-sm">
            &copy; {currentYear} MyApp. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
