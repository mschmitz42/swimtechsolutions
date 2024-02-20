
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
import SessionProvider from "@/components/SessionProvider";
import { getServerSession } from "next-auth";
import { AuthOptions } from "@/components/AuthOptions"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Swimtech Solutions",
  description: "Swim coaching for triathletes",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const session = await getServerSession(AuthOptions);

  return (
    <>
      <html lang="en">
        <body className={inter.className}>

          <SessionProvider session={session}>

            {children}

          </SessionProvider>

          <BootstrapClient />

          <MainJSClient/>

        </body>


      </html>
    </>
  );
}

