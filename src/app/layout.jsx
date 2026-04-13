import './globals.css';
import Navbar from '../components/Navbar';
import { inter, playfair } from '../lib/fonts';

export const metadata = {
  title: 'Fernanda Mollocondo | Software Engineer',
  description: 'Minimalist portfolio focused on Software Engineering and Philosophy.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      {/* Usamos next/font para Inter (cuerpo) y Playfair Display (display headings) */}
      <body className={`${inter.className} ${playfair.className} antialiased tracking-tight bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 transition-colors duration-300`}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}

