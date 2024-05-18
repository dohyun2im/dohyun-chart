import type { Metadata } from "next";
import { IBM_Plex_Sans_KR } from "next/font/google";
import "./globals.css";
import Providers from "./providers";
import { PropsWithChildren } from "react";

const ibmPlexSansKR = IBM_Plex_Sans_KR({
  weight: ["100", "200", "300", "400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-ibm-plex-sans-KR",
  display: "swap"
});

export const metadata: Metadata = {
  title: "Dashboard & Flow"
};

export default function RootLayout({ children }: Readonly<PropsWithChildren>) {
  return (
    <html lang="en" className={`${ibmPlexSansKR.variable}`}>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
