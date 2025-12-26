import type { Metadata } from "next";
import { Playfair_Display, Raleway } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair", // <--- THE NAME IS HERE
  weight: ["600", "700"],
});

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
  weight: ["400", "600"],
});

export const metadata: Metadata = {
  title: "La Cima Mariscos",
  description: "Fresh Mariscos & Cold Treats",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* We inject the variable name here so CSS can see it */}
      <body
        className={`${playfair.variable} ${raleway.variable} font-body antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
