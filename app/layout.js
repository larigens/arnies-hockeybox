import { Inter } from "next/font/google";
import "./globals.css";
import Nav from '@/components/Nav';
import Footer from "@/components/Footer";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Arnie's Hockey Box",
  description: "When it comes to hockey, we've got you covered, box after box.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Nav />
        {children}</body>
      <Footer />
    </html>
  );
}
