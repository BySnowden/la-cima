"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MenuSection } from "@/components/ui/menusection";
import Navbar from "@/components/ui/navbar";
import Location from "@/components/ui/location";
import Footer from "@/components/ui/footer";
import { useEffect } from "react";
import { BUSINESS_PHONE_LINK } from "@/lib/constants";

// Smooth scroll function
const smoothScrollToElement = (targetId: string) => {
  const element = document.querySelector(targetId);
  if (!element) return;

  const targetPosition = element.getBoundingClientRect().top + window.scrollY;
  const startPosition = window.scrollY;
  const distance = targetPosition - startPosition;
  const duration = 50;
  let start: number | null = null;

  const animation = (currentTime: number) => {
    if (start === null) start = currentTime;
    const elapsed = currentTime - start;
    const progress = Math.min(elapsed / duration, 1);

    window.scrollTo(0, startPosition + distance * progress);

    if (elapsed < duration) {
      requestAnimationFrame(animation);
    }
  };

  requestAnimationFrame(animation);
};

// --- Sub-Component: Hero ---
function Hero() {
  return (
    <section id="home" className="w-full max-w-6xl mx-auto px-4 mt-8">
      {/* This DIV is your "Green Box" from the screenshot */}
      <motion.div
        className="bg-teal-700 rounded-3xl p-12 text-center text-white shadow-2xl overflow-hidden relative"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Background Pattern (Optional subtle detail) */}
        <motion.div
          className="absolute top-0 left-0 w-full h-full opacity-30 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        ></motion.div>

        <div className="relative z-10 flex flex-col items-center gap-6">
          <h1
            className="font-brand text-5xl md:text-6xl font-semibold tracking-tight drop-shadow-md"
            style={{
              fontFamily: "var(--font-playfair), serif",
              fontWeight: 600,
            }}
          >
            Fresh Mariscos &{" "}
            <span className="text-orange-300">Cold Treats!</span>
          </h1>

          <p className="font-body text-lg text-teal-100 max-w-2xl">
            The best ceviche, burgers, and shaved ice in San Antonio.
          </p>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              size="lg"
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold text-lg px-8 py-6 rounded-full shadow-lg"
              asChild
            >
              <a href={BUSINESS_PHONE_LINK}>Call to Order</a>
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

// --- Main Page ---
export default function Home() {
  useEffect(() => {
    // Check if there's a hash in the URL and scroll to it
    if (window.location.hash) {
      setTimeout(() => {
        smoothScrollToElement(window.location.hash);
      }, 100);
    }
  }, []);

  return (
    <div className="flex min-h-screen w-full flex-col bg-stone-50">
      <Navbar />
      <Hero />
      <MenuSection />
      <Location />
      <Footer />
    </div>
  );
}
