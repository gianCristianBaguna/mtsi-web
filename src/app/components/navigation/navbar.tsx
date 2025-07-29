"use client"

import Link from "next/link"
import { Menu, X } from "lucide-react"
import { useState } from "react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="bg-white shadow-sm border-b sticky top-0 z-50 border-1 border-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gray-900 flex items-center justify-center transform rotate-45">
              <div className="text-white font-bold text-lg transform -rotate-45">M</div>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-gray-900 text-sm leading-tight">MT SOLUTIONS</span>
              <span className="text-xs text-gray-600 leading-tight">Incorporated</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#welcome" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Home
            </Link>
            <Link href="#solutions" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Solutions
            </Link>
            <Link href="#profile" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Company Profile
            </Link>
            <Link href="#services" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Services
            </Link>
            <button className="bg-blue-600 hover:bg-blue-700 text-white">Contact Us</button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t bg-white">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                href="#welcome"
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="#solutions"
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Solutions
              </Link>
              <Link
                href="#profile"
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Company Profile
              </Link>
              <Link
                href="#services"
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <div className="px-3 py-2">
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white =">Contact Us</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
