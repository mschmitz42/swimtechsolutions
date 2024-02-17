
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.min.css";
import Script from 'next/script'

// <!-- Vendor CSS Files -->
import "../assets/vendor/boxicons/css/boxicons.min.css";

{/* <!-- Template Main SCSS File --> */}
import "../assets/scss/style.scss";


import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import BootstrapClient from '@/components/BootstrapClient';
import MainJSClient from '@/components/MainJSClient';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Swimtech Solutions",
  description: "Swim coaching for triathletes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en">
        <body className={inter.className}>

          {children}

          <BootstrapClient />

          <MainJSClient/>

        </body>


      </html>
    </>
  );
}

