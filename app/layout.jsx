
import { Inter } from 'next/font/google';
import './globals.css';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: "Arnie's Hockey Box",
  description: "When it comes to hockey, we've got you covered, box after box.",
};

export default function RootLayout({ children }) {

  return (
    <html lang='en'>
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <body className={inter.className}>
        <Nav />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
