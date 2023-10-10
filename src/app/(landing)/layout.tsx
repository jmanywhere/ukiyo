import { ClientProviders } from "@/providers/ClientSide";
import "../globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import Header from "../../components/Layout/Header";
import Footer from "../../components/Layout/Footer";
import classNames from "classnames";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "ukiyo Protocol",
  description: "A new type of financial technology for capital formation",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={classNames("", poppins.className, poppins.variable)}>
        <Header />
        <ClientProviders>{children}</ClientProviders>
        <Footer />
      </body>
    </html>
  );
}
