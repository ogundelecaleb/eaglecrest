import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Eaglecrest - Software Development Solutions",
  description:
    "Leading software development company building real-world solutions for individuals and organizations. Specializing in HRM, scholarship management, library systems, and payment gateways.",
  keywords:
    "software development, HRM, scholarship management, library management, payment gateway, Eaglecrest, HR Software in Nigeria, Payment gateware for Schools",
  generator: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta
          name="google-site-verification"
          content="google5531123c625f4489.html"
        />
{/* Start of Tawk.to Script */}
<script
  dangerouslySetInnerHTML={{
    __html: `
      var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
      (function(){
        var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
        s1.async=true;
        s1.src='https://embed.tawk.to/685d68c570657f1909c04aa8/1iume2hka';
        s1.charset='UTF-8';
        s1.setAttribute('crossorigin','*');
        s0.parentNode.insertBefore(s1,s0);
      })();
    `,
  }}
/>
{/* End of Tawk.to Script */}
      </head>
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
