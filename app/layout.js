import { Outfit, Ovo } from "next/font/google";
import "./globals.css";

const Outfit = Outfit({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  subsets: ["latin"], weight: ["400", "500", "600", "700"]
});

const Ovo = Ovo({
  subsets: ["latin"], weight: ["400"]
});

export const metadata = {
  title: "React Portfolio Template",
  description: "A Single Page Portfolio Created Using React",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${Outfit.className} ${Ovo.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
