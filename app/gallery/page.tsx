"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import { useState } from "react";

const foodImages = [
  {
    src: "/assets/food/caldo%20de%20mariscos.jpg",
    alt: "Caldo de Mariscos",
    title: "Caldo de Mariscos",
  },
  {
    src: "/assets/food/flautas%20preparadas.jpg",
    alt: "Flautas Preparadas",
    title: "Flautas Preparadas",
  },
  {
    src: "/assets/food/fried%20fish%20and%20shrimp.jpg",
    alt: "Fried Fish and Shrimp",
    title: "Fried Fish and Shrimp",
  },
  {
    src: "/assets/food/fruit%20cup.jpg",
    alt: "Fruit Cup",
    title: "Fruit Cup",
  },
  {
    src: "/assets/food/grilled%20fish.jpg",
    alt: "Grilled Fish",
    title: "Grilled Fish",
  },
  {
    src: "/assets/food/mangodilly.jpg",
    alt: "Mangodilly",
    title: "Mangodilly",
  },
  {
    src: "/assets/food/oyster%20shots%20with%20ceviche%20mix.jpg",
    alt: "Oyster Shots with Ceviche Mix",
    title: "Oyster Shots with Ceviche Mix",
  },
  {
    src: "/assets/food/salbutes%20tabasqueno.jpg",
    alt: "Salbutes Tabasqueño",
    title: "Salbutes Tabasqueño",
  },
  {
    src: "/assets/food/shrimp%20cocktail.jpg",
    alt: "Shrimp Cocktail",
    title: "Shrimp Cocktail",
  },
  {
    src: "/assets/food/torre%20de%20mariscos%20con%20ostiones.jpg",
    alt: "Torre de Mariscos con Ostiones",
    title: "Torre de Mariscos con Ostiones",
  },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="flex min-h-screen w-full flex-col bg-stone-50">
      <Navbar />

      {/* Gallery Header */}
      <section className="w-full max-w-6xl mx-auto px-4 mt-8 md:mt-12 mb-8 md:mb-16">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1
            className="text-3xl md:text-5xl lg:text-6xl font-bold text-teal-800 mb-4"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            Our Food Gallery
          </h1>
          <p className="text-stone-600 text-base md:text-lg max-w-2xl mx-auto px-2">
            Feast your eyes on the fresh, delicious food we prepare daily at La
            Cima Mariscos.
          </p>
        </motion.div>
      </section>

      {/* Gallery Grid */}
      <section className="w-full max-w-6xl mx-auto px-2 md:px-4 pb-8 md:pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {foodImages.map((image, index) => (
            <motion.div
              key={image.alt}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="flex flex-col"
            >
              <div
                className="group relative overflow-hidden rounded-2xl shadow-lg border border-stone-100 h-48 md:h-64 lg:h-80 w-full cursor-pointer"
                onClick={() => setSelectedImage(image.src)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />

                {/* Overlay with title on hover */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                  <motion.h3
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="text-white text-xl font-bold text-center px-4"
                    style={{ fontFamily: "var(--font-playfair), serif" }}
                  >
                    {image.title}
                  </motion.h3>
                </div>
              </div>

              {/* Text below image */}
              <p className="text-center text-stone-700 font-medium mt-2 md:mt-4 text-sm md:text-lg">
                {image.title}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="w-full h-auto max-w-sm md:max-w-2xl max-h-[70vh] md:max-h-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage}
              alt="Enlarged food"
              className="w-full h-auto max-h-[70vh] object-contain rounded-3xl shadow-2xl"
            />
          </motion.div>
        </motion.div>
      )}

      <Footer />
    </div>
  );
}
