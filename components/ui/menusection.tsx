"use client";

import { motion } from "framer-motion";

const menuCategories = [
  {
    // Menu Stuff
    title: "Snacks",
    description: "Sweet, spicy, and savory treats.",
    items: [
      "Mangonada",
      "Piccadilly",
      "Shave Ice",
      "Corn in Cup (Elote)",
      "Chicharrones Prep",
      "Chamoy Apple",
      "Fresas con Crema",
    ],
  },
  {
    title: "Meals",
    description: "Freshly prepared hearty dishes.",
    items: [
      "Ceviche / Aguachiles",
      "Fried Fish & Shrimp",
      "Fish Tacos",
      "Mini Tacos / Flautas",
      "Hamburgers",
      "Caldo de Mariscos",
      "Mexican Hotdogs",
    ],
  },
  {
    title: "Drinks",
    description: "Thirst quenchers for the heat.",
    items: [
      "Aguas Frescas (Limon, Fresa...)",
      "Rusas",
      "Sodas",
      "Mineral Prep",
      "Licuados (Papaya, Melon...)",
    ],
  },
];

export function MenuSection() {
  return (
    <section id="menu" className="py-16 px-4 bg-stone-50">
      {/* Section Header Area */}
      <div className="text-center mb-12">
        <h2
          className="text-4xl font-bold text-teal-800 mb-4"
          style={{ fontFamily: "var(--font-playfair), serif" }}
        >
          Our Menu
        </h2>
        <p className="text-stone-600 italic">
          Fresh seafood, traditional Mexican snacks, and delicious ice treats.
        </p>
      </div>

      {/* Grid Container Area */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* We "Map" (Loop) through the data to create cards */}
        {menuCategories.map((category, index) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{
              y: -8,
              boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
            }}
            viewport={{ once: true }}
            transition={{
              delay: index * 0.2,
              default: { type: "tween", duration: 0.2 },
            }} // Stagger the animation (0s, 0.2s, 0.4s)
            className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100"
          >
            {/* Card Header with Orange Underline */}
            <div className="border-b-2 border-orange-200 pb-4 mb-6">
              <h3
                className="text-2xl font-bold text-teal-700"
                style={{ fontFamily: "var(--font-playfair), serif" }}
              >
                {category.title}
              </h3>
              <p className="text-sm text-stone-400 mt-1">
                {category.description}
              </p>
            </div>

            {/* List Items */}
            <ul className="space-y-3">
              {category.items.map((item) => (
                <li
                  key={item}
                  className="flex items-center text-stone-600 font-medium"
                >
                  {/* Custom Bullet Point */}
                  <span className="w-2 h-2 bg-orange-400 rounded-full mr-3"></span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
