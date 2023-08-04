import Navbar from "@/components/Navbar";
import Header from "@/components/Header";

import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import Showcase from "@/app/(site)/components/Showcase";
import Footer from "@/components/Footer";
import SupabaseProvider from "@/providers/SupabaseProvider";
import UserProvider from "@/providers/UserProvider";
import ModalProvider from "@/providers/ModalProvider";
import ToasterProvider from "@/providers/ToasterProvider";

const font = Poppins({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cats4You",
  description: "Cat Adoption Site",

};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <body className={font.className}>
        <div className="flex-col justify-center items-center h-[120vh]">
          <ToasterProvider />
          <SupabaseProvider>
            <UserProvider>
              <ModalProvider />
              <Navbar>
              {children}
              </Navbar>
              <Footer />
            </UserProvider>
          </SupabaseProvider>
        </div>
      </body>
    </html>
  );
}
