import localFont from "next/font/local";
import "./globals.css";
import FullSidebarAccordion from "./src/app/components/SidebarAccordian";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "D&D SRD Landing Page",
  description: "A Next.js-powered D&D SRD guide.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-100`}
      >
        <header className="fixed top-0 left-0 right-0 z-30 p-6 glass bg-opacity-50 shadow-lg">
          <h1 className="text-4xl font-extrabold text-center text-accent">
            TTRPG Nexus
          </h1>
          <p className="text-center text-sm text-neutral-content">
            Your hub for game info and social storage.
          </p>
        </header>
        <FullSidebarAccordion />
        <main className="pt-24">{children}</main>
      </body>
    </html>
  );
}
