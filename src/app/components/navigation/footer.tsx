"use client";
import { Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-10 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Company Info */}
        <div>
          <h4 className="text-xl font-bold mb-3">MTSI</h4>
          <p className="text-sm">
            Multi-Disciplinary Technical Solutions, Inc. delivering innovative,
            scalable, and client-centered solutions.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-xl font-bold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#about" className="hover:underline text-blue-200">
                About Us
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:underline text-blue-200">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-xl font-bold mb-3">Contact</h4>
          <p className="text-sm">📍 Bagumbayan, Tigbauan, Iloilo</p>
          <p className="text-sm">📞 +63 917 142 2937</p>
          <p className="text-sm">✉️ info@themtsolutions.com</p>
          <p className="text-sm flex gap-2 lg:ml-0 ml-20">
            <Facebook className="w-4 h-4 text-white" />
            <a
              href="https://www.facebook.com/mtsolutionsincorporated"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white"
            >
              themtsolutionsincorporated
            </a>
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t border-blue-700 pt-6 text-center text-xs text-blue-300">
        &copy; {new Date().getFullYear()} Wisdomoustech. All rights reserved.
      </div>
    </footer>
  );
}
