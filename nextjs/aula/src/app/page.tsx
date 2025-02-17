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

export default function Home() {

  const randomNumber = Math.random() * 10;

  return (
    <div>
      <h1>Pagina HOME</h1>
      <h2>{randomNumber}</h2>
    </div>
  );
}