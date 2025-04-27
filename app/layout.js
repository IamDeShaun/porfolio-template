import "./globals.css";



export const metadata = {
  title: "React Portfolio Template",
  description: "A Single Page Portfolio Created Using React",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='scroll-smooth'>
      <body
        className={`antialiased leading-8 overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
