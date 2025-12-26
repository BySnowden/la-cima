"use client";

import Link from "next/link";
import { Button } from "./button";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faCompass } from "@fortawesome/free-solid-svg-icons";

export default function Location() {
  return (
    <section id="hours" className="py-16 px-4 bg-stone-50">
      <div className="max-w-6xl mx-auto">
        {/* Grid layout: left for location, right for future content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left: Location Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-6 h-full"
          >
            <div>
              <h2
                className="text-4xl font-bold text-teal-800 mb-2"
                style={{ fontFamily: "var(--font-playfair), serif" }}
              >
                Find us here
              </h2>
              <p className="text-stone-500 italic text-sm">
                Come visit us at La Cima!
              </p>
            </div>

            {/* Google Maps Embed */}
            <div className="rounded-2xl overflow-hidden shadow-md border border-stone-100 h-80">
              <iframe
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen={false}
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3462.4894394657507!2d-98.48965!3d29.387925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644b67f60000001%3A0x1234567890!2s1430%20Somerset%20Rd%2C%20San%20Antonio%2C%20TX%2078211!5e0!3m2!1sen!2sus!4v1640000000000"
              ></iframe>
            </div>

            {/* Get Directions Button */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="https://www.google.com/maps/place/1430+Somerset+Rd,+San+Antonio,+TX+78211"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold text-lg py-6 rounded-xl shadow-md mt-auto">
                  <FontAwesomeIcon
                    icon={faCompass}
                    className="w-8 h-8 text-white mr-3 inline-block"
                  />
                  Get Directions
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right: Hours & Contact */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-6 h-full"
          >
            <div>
              <h2
                className="text-4xl font-bold text-teal-800 mb-2"
                style={{ fontFamily: "var(--font-playfair), serif" }}
              >
                Our Hours
              </h2>
              <p className="text-stone-500 italic text-sm">
                Come check when we're open!
              </p>
            </div>

            {/* Hours Card */}
            <div className="bg-white rounded-2xl p-8 shadow-md border border-stone-100 h-80 overflow-y-auto">
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-3 border-b border-stone-100">
                  <span className="font-medium text-stone-700">Monday</span>
                  <span className="text-stone-600">11:00 AM - 9:00 PM</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-stone-100">
                  <span className="font-medium text-stone-700">Tuesday</span>
                  <span className="text-orange-500 font-semibold">Closed</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-stone-100">
                  <span className="font-medium text-stone-700">Wednesday</span>
                  <span className="text-stone-600">11:00 AM - 9:00 PM</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-stone-100">
                  <span className="font-medium text-stone-700">Thursday</span>
                  <span className="text-stone-600">11:00 AM - 9:00 PM</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-stone-100">
                  <span className="font-medium text-stone-700">Friday</span>
                  <span className="text-stone-600">11:00 AM - 10:00 PM</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-stone-100">
                  <span className="font-medium text-stone-700">Saturday</span>
                  <span className="text-stone-600">11:00 AM - 10:00 PM</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium text-stone-700">Sunday</span>
                  <span className="text-stone-600">1:30 PM - 9:00 PM</span>
                </div>
              </div>
            </div>

            {/* Call Button */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold text-lg py-6 rounded-xl shadow-md mt-auto">
                <FontAwesomeIcon
                  icon={faPhone}
                  className="w-5 h-5 text-white mr-2"
                />
                Call to Order
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
