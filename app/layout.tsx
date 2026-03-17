import type { Metadata } from "next";
import "./globals.css";
import { geistMono, geistSans, lexend } from "./ui/fonts";
import NavBar from "./ui/components/navBar";


export const metadata: Metadata = {
  title: "Saaz",
  description: "My personal website, built with Next.js and Tailwind",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${lexend.variable} antialiased  flex flex-col  items-center`}
      >
        <header className="w-full flex justify-center"> <NavBar/> </header>
        {children}
        <footer><p className="text-neutral-600">©2026 Saaz Ramsubhag</p></footer>
      </body>
    </html>
  );
}
