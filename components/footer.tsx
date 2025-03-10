'use client'

import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin, Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="container px-4 md:px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          <div className="col-span-2">
            <Link href="/" className="flex items-center space-x-2">
              <span className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold">AI</span>
              </span>
              <span className="font-bold text-xl">Try it on AI</span>
            </Link>
            <p className="mt-2 text-sm text-gray-500 max-w-xs">
              Generate high-quality AI headshots effortlessly. Perfect for professionals, teams, and creatives.
            </p>
            <div className="flex space-x-4 mt-4">
              <Link href="#" className="text-gray-500 hover:text-primary">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-500 hover:text-primary">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-gray-500 hover:text-primary">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-gray-500 hover:text-primary">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="#" className="text-gray-500 hover:text-primary">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
            </div>
          </div>
          <div>
            <h3 className="font-medium mb-3">Product</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="text-gray-500 hover:text-primary">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-500 hover:text-primary">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-500 hover:text-primary">
                  AI Models
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-500 hover:text-primary">
                  Changelog
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-500 hover:text-primary">
                  Roadmap
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium mb-3">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="text-gray-500 hover:text-primary">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-500 hover:text-primary">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-500 hover:text-primary">
                  Tutorials
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-500 hover:text-primary">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-500 hover:text-primary">
                  Community
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium mb-3">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="text-gray-500 hover:text-primary">
                  About
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-500 hover:text-primary">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-500 hover:text-primary">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-500 hover:text-primary">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-500 hover:text-primary">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t text-center text-sm text-gray-500">
          <p>© 2025 Try it on AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
