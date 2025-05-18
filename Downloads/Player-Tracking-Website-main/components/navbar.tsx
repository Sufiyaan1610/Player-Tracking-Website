"use client";

import Link from 'next/link';
import { MapPin } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed w-full z-50 bg-black/50 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <MapPin className="h-8 w-8 text-yellow-400" />
              <span className="ml-2 text-2xl font-bold text-yellow-400">Redback Operations</span>
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              <Link href="/products" className="text-white hover:text-yellow-400 transition-colors">
                PRODUCTS
              </Link>
              <Link href="/sports" className="text-white hover:text-yellow-400 transition-colors">
                SPORTS
              </Link>
              <Link href="/contact" className="text-white hover:text-yellow-400 transition-colors">
                CONTACT
              </Link>
              <Link href="/support" className="text-white hover:text-yellow-400 transition-colors">
                SUPPORT
              </Link>
              <Link href="/login">
                <span className="border border-yellow-400 text-yellow-400 px-4 py-2 rounded hover:bg-yellow-400 hover:text-black transition">
                Login
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}