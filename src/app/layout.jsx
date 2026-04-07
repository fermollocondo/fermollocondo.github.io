import { Roboto } from 'next/font/google';
import './globals.css';
// Importamos la Navbar (asegúrate de que la carpeta y el archivo existan)
import Navbar from '../components/Navbar/Navbar';

const roboto = Roboto({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        {/* La Navbar se coloca aquí para que sea global */}
        <Navbar />
        
        {/* El contenido de cada página se renderiza aquí */}
        {children}
      </body>
    </html>
  );
}

