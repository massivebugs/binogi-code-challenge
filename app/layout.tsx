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
      <body className={`${inter.className} antialiased`}>
        <Navbar className="py-5 mx-auto" />
        {children}
      </body>
    </html>
  );
}
