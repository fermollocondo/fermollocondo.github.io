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
      {/* Tom Weightman style: Inter, clean, muted colors, slight tracking-tight */}
      <body className={`${inter.className} antialiased tracking-tight text-[#333333] dark:text-[#E0E0E0] bg-[#fafafa] dark:bg-[#111111] transition-colors duration-300`}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}

