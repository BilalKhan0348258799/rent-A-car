import './globals.css';
import { ReactNode } from 'react';

export const metadata = {
  title: 'Rent A Car',
  description: 'Affordable car rentals for everyone.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-800 min-h-screen flex flex-col">
        {/* Header */}
        <header className="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white shadow-lg sticky top-0 z-50">
          <nav className="container mx-auto flex justify-between items-center py-4 px-6">
            <h1 className="text-3xl font-extrabold tracking-widest">
              Rent A Car
            </h1>
            <ul className="flex space-x-8 text-lg font-semibold">
              <li>
                <a href="/" className="hover:underline hover:text-blue-300">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="hover:underline hover:text-blue-300">
                  About
                </a>
              </li>
              <li>
                <a
                  href="/contact-us"
                  className="hover:underline hover:text-blue-300"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="/book-now"
                  className="bg-white text-blue-600 px-4 py-2 rounded-lg shadow-md hover:bg-blue-100 transition"
                >
                  Book Now
                </a>
              </li>
            </ul>
          </nav>
        </header>

        {/* Main Content */}
        <main className="container mx-auto flex-1 py-8 px-6">{children}</main>

        {/* Footer */}
        <footer className="bg-gray-900 text-gray-300 py-6">
          <div className="container mx-auto text-center">
            <p className="text-sm">© 2024 Rent A Car. All rights reserved.</p>
            <p className="mt-2">
              Follow us on{' '}
              <a
                href="#"
                className="text-blue-400 hover:text-blue-300 underline"
              >
                Facebook
              </a>{' '}
              and{' '}
              <a
                href="#"
                className="text-blue-400 hover:text-blue-300 underline"
              >
                Instagram
              </a>.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}

