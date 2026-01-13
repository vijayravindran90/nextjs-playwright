'use client';

import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-indigo-600 text-white shadow-md sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold hover:opacity-90">
          MyApp
        </Link>
        <div className="flex gap-4">
          <Link
            href="/api"
            className="bg-white text-indigo-600 px-4 py-2 rounded-lg font-semibold hover:bg-indigo-50 transition duration-200"
          >
            API
          </Link>
          <Link
            href="/login"
            className="bg-white text-indigo-600 px-4 py-2 rounded-lg font-semibold hover:bg-indigo-50 transition duration-200"
          >
            Login
          </Link>
        </div>
      </nav>
    </header>
  );
}
