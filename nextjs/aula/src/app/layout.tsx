import "./globals.css";
import { Header } from '../components/header'
import { Metadata } from "next";


export const metadata: Metadata = {
  title: 'Home Next',
  description: 'Aprendendo NextJS',
  openGraph: {
    title: 'Home Next',
    description: 'Aprendendo NextJS',
    images: ['https://wbsistem.com.br/wp-content/uploads/2023/05/wb-logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
    }
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
