'use client'
import { useEffect, useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Work from "./components/Work";
import Footer from "./components/Footer";

export default function Home() {

  

  const [isDark, setIsDark] = useState(() => {
    // On first load, check system preference or localStorage
   
   
  });

  useEffect(() => {
    
    const html = document.documentElement;
    if (isDark) {
      html.classList.add('dark');
    } else {
      html.classList.remove('dark');
    }
    
  }, [isDark]);
  
  
  return (
    <>
    <Navbar IsDark={isDark} setIsDark={setIsDark} />
    <Header isDarkMode={isDark} />
    <About isDark={isDark} />
    <Services isDark={isDark} />
    <Work isDark={isDark} />
    <Contact isDark={isDark} />
    <Footer isDark={isDark} />
    </>
  );
}
