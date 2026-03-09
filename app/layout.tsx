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
        <div className="flex flex-col w-full max-w-5xl min-h-screen items-center justify-start bg-background font-sans dark:bg-brand-950">
          <header className="w-full flex justify-center"> <NavBar/> </header>
          
          {children}
        </div>
      </body>
    </html>
  );
}
