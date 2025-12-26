"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTiktok,
  faYelp,
} from "@fortawesome/free-brands-svg-icons";
import { BUSINESS_PHONE, BUSINESS_PHONE_LINK } from "@/lib/constants";

export default function Footer() {
  const socialLinks = [
    {
      icon: faFacebook,
      url: "https://www.facebook.com/p/La-Cima-mariscos-antojitos-y-m%C3%A1s-61567835916145/",
      label: "Facebook",
    },
    {
      icon: faInstagram,
      url: "https://instagram.com/lacima",
      label: "Instagram",
    },
    {
      icon: faTiktok,
      url: "https://www.tiktok.com/@lacimaantojitosymas",
      label: "TikTok",
    },
    {
      icon: faYelp,
      url: "https://www.yelp.com/biz/la-cima-mariscos-antojitos-y-mas-san-antonio",
      label: "Yelp",
    },
  ];

  return (
    <footer
      id="contact"
      className="bg-teal-700 text-white py-16 px-4 rounded-t-3xl"
    >
      <div className="max-w-4xl mx-auto">
        {/* Contact Section */}
        <div className="text-center mb-12">
          <h2
            className="text-4xl font-bold mb-4"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            Contact us
          </h2>
          <p className="text-lg text-teal-100">
            Questions? Call us at{" "}
            <a
              href={BUSINESS_PHONE_LINK}
              className="font-bold hover:text-orange-300 transition-colors"
            >
              {BUSINESS_PHONE}
            </a>
          </p>
        </div>

        {/* Social Media Box */}
        <div className="bg-teal-600 rounded-2xl p-8 mb-12 text-center">
          <p className="text-teal-100 mb-6 font-semibold">Find us on</p>
          <div className="flex justify-center items-center gap-8">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.3, y: -5 }}
                whileTap={{ scale: 0.95 }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 10,
                }}
                className="text-white hover:text-orange-300 transition-colors"
                aria-label={social.label}
              >
                <FontAwesomeIcon icon={social.icon} className="w-8 h-8" />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-teal-600 pt-8">
          <p className="text-center text-teal-100 mb-3">
            © 2025 La Cima Mariscos Antojitos y Más
          </p>
          <p className="text-center text-teal-200 text-sm">
            Developed{" "}
            <Link
              href="https://github.com/bysnowden"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-300 transition-colors font-semibold"
            >
              BySnowden
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
