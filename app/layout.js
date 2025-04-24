import { Outfit, Ovo } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});


const ovo = Ovo({
  subsets: ["latin"], weight: ["400"]
});

export const metadata = {
  title: "React Portfolio Template",
  description: "A Single Page Portfolio Created Using React",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='scroll-smooth'>
      <body
        className={`${outfit.className} ${ovo.className} antialiased leading-8 overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
