import type { Metadata } from "next";
import { Inter, Manrope, Bebas_Neue as Bebas } from "next/font/google";
import localFont from "next/font/local"
import "./globals.css";
import NavBar from "./components/NavBar";
import LetsConnectSection from "./components/LetsConnectSection"


const inter = Inter({ subsets: ["latin"], display: 'swap', variable: '--font-inter' });
const manrope = Manrope({ subsets: ["latin"], display: 'swap', variable: '--font-manrope' });
const bebas = localFont({
  src: './assets/fonts/BebasNeue-Regular.ttf',
  display: 'swap',
  variable: '--font-bebas-neue'
})

export const metadata: Metadata = {
  title: "ADEWUMI ALABI | Software Engineer",
  description: "A Lagos based Software Engineer knowledgeable about current trends in user interfaces, inter-connectivity and back-end infrastructure. Expertly handles development lifecycle with meticulous approach and big-picture understanding of requirements.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable} ${bebas.variable} scroll-smooth`}>
      <body >
        <NavBar />

        {children}
        <LetsConnectSection />
      </body>
    </html>
  );
}
