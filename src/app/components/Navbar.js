'use client'; // Client component for using navigation hooks

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();
  
  const navLinkStyle = {
    marginRight: '32px',
    transition: 'color 0.3s'
  };
  
  return (
    <header className="bg-gray-800 text-white py-4 shadow-md">
      <div className="container mx-auto px-4">
        <nav className="flex justify-between items-center">
          <Link href="/" className="font-bold text-2xl flex items-center">
            <span className="text-blue-850" style={{ marginLeft: '68px'}}>MacBook Air Sale</span>
            {/* <span className="ml-1">Air Sale</span> */}
          </Link>
          
          <div className="flex" style={{ columnGap: '40px' }}>
            <Link 
              href="/" 
              className={`hover:text-blue-400 transition-colors ${pathname === '/' ? 'font-bold text-blue-400' : ''}`}
              style={navLinkStyle}
            >
              Home
            </Link>
            <Link 
              href="/product" 
              className={`hover:text-blue-400 transition-colors ${pathname === '/product' ? 'font-bold text-blue-400' : ''}`}
              style={navLinkStyle}
            >
              Product Details
            </Link>
            <Link 
              href="/contact" 
              className={`hover:text-blue-400 transition-colors ${pathname === '/contact' ? 'font-bold text-blue-400' : ''}`}
            >
              Contact
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}