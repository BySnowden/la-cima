"use client";

import Link from "next/link";
import { Button } from "./button";
import { nav } from "framer-motion/client";

const navLinks = [
  { name: "Home", href: "#home", isAnchor: true },
  { name: "Menu", href: "#menu", isAnchor: true },
  { name: "Hours", href: "#hours", isAnchor: true },
  { name: "Contact", href: "#contact", isAnchor: true },
  { name: "Gallery", href: "/gallery", isAnchor: false },
];

const smoothScroll = (targetId: string) => {
  const element = document.querySelector(targetId);

  // If element doesn't exist on current page, navigate to home with hash
  if (!element) {
    window.location.href = `/${targetId}`;
    return;
  }

  const targetPosition = element.getBoundingClientRect().top + window.scrollY;
  const startPosition = window.scrollY;
  const distance = targetPosition - startPosition;
  const duration = 250; // milliseconds - faster
  let start: number | null = null;

  const animation = (currentTime: number) => {
    if (start === null) start = currentTime;
    const elapsed = currentTime - start;
    const progress = Math.min(elapsed / duration, 1);

    // Linear easing for consistent fast scrolling
    window.scrollTo(0, startPosition + distance * progress);

    if (elapsed < duration) {
      requestAnimationFrame(animation);
    }
  };

  requestAnimationFrame(animation);
};

export default function Navbar() {
  return (
    <nav className="w-full py-4 px-8 flex justify-between items-center bg-white shadow-sm sticky top-0 z-50">
      {/* Logo Section */}
      <div className="flex items-center gap-2">
        <Link
          href="/"
          className="text-2xl font-bold text-teal-700"
          style={{ fontFamily: "var(--font-playfair), serif" }}
        >
          La Cima Mariscos
        </Link>
      </div>

      {/* Navigation Links */}
      <div className="hidden md:flex gap-8 items-center">
        {navLinks.map((link) =>
          link.isAnchor ? (
            <button
              key={link.name}
              onClick={() => smoothScroll(link.href)}
              className="text-stone-600 hover:text-teal-600 transition-colors cursor-pointer bg-none border-none p-0"
            >
              {link.name}
            </button>
          ) : (
            <Link
              key={link.name}
              href={link.href}
              className="text-stone-600 hover:text-teal-600 transition-colors"
            >
              {link.name}
            </Link>
          )
        )}

        <Button className="bg-orange-500 hover:bg-orange-600 text-white rounded-full">
          Call Now
        </Button>
      </div>
    </nav>
  );
}
