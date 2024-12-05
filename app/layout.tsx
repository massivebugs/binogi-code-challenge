import type { Metadata } from "next";
import "./globals.css";
import { inter } from "./fonts";
import Navbar from "./ui/molecules/Navbar";

export const metadata: Metadata = {
  title: "Recipe Search App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <Navbar className="py-5 mx-auto" />
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
