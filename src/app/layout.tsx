import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "@/lib/Providers";
import Header from "@/components/common/header/Header";
import Footer from "@/components/common/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Frudbaz | Restaurant Management System",
  description:
    "Frudbaz is a restaurant management system that helps you manage your restaurant",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Providers>
      <html lang="en">
        <body className={`${inter.className} max-w-[1920px] mx-auto bg-white text-black`}>
          <Header />
          {children}
          <Footer />
        </body>
      </html>
    </Providers>
  );
}
