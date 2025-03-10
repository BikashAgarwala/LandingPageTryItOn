"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import logo from "@/public/TryItOnAI_logo.avif";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-md">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Image src={logo} alt="Try It On AI" width={140} height={70} />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link href="#features" className="text-sm font-medium hover:text-primary">
            Features
          </Link>
          <Link href="#testimonials" className="text-sm font-medium hover:text-primary">
            Testimonials
          </Link>
          <Link href="#pricing" className="text-sm font-medium hover:text-primary">
            Pricing
          </Link>
          <Link href="#blog" className="text-sm font-medium hover:text-primary">
            Blog
          </Link>
        </nav>

        {/* CTA Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <Button variant="outline" size="sm">Log in</Button>
          <Button size="sm" className="bg-primary text-white">Get Started</Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-white shadow-lg py-4 px-6">
          <nav className="flex flex-col space-y-4">
            <Link href="#features" className="text-sm font-medium hover:text-primary" onClick={toggleMenu}>
              Features
            </Link>
            <Link href="#testimonials" className="text-sm font-medium hover:text-primary" onClick={toggleMenu}>
              Testimonials
            </Link>
            <Link href="#pricing" className="text-sm font-medium hover:text-primary" onClick={toggleMenu}>
              Pricing
            </Link>
            <Link href="#blog" className="text-sm font-medium hover:text-primary" onClick={toggleMenu}>
              Blog
            </Link>
            <div className="flex flex-col space-y-2 pt-4">
              <Button variant="outline" size="sm" className="w-full">
                Log in
              </Button>
              <Button size="sm" className="w-full bg-primary text-white">
                Get Started
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}