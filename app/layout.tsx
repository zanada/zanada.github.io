import type { Metadata } from "next";
import "./globals.css";
import { geistMono, geistSans } from "./ui/fonts";
import NavBar from "./ui/components/navBar";
import Background from "./Background";


export const metadata: Metadata = {
  title: "Saaz",
  description: "My personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} antialiased min-h-screen flex flex-col  items-center`}
      >
        <header className="w-full flex justify-center"> <NavBar/> </header>
        <Background />
        {children}
        <footer><p className="text-neutral-600 mb-4">©2026 Saaz Ramsubhag</p></footer>
      </body>
    </html>
  );
}
