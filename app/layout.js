import { Inter } from "next/font/google";
import "./globals.css";

import Navbar from './components/Navbar'

const inter = Inter({ subsets: ["latin"] });




export const metadata = {
  title: "To do",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-1 dark:bg-[--bg-primary] text-[--font-color-primary]  text-[1.4rem]">
          <Navbar />
          <main className="bg-[--bg-secondary] flex flex-1">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
