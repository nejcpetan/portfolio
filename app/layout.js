import { Inter } from "next/font/google";
import "./globals.css";
//import "./styles/hero.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "My Portfolio | Nathan Petain",
  description: "A showcase of my professional life and projects.",
};

export default function RootLayout({ children }) {
  return (
    <html data-theme="dim" lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
