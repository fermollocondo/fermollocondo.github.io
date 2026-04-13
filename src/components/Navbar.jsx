'use client';
import Link from 'next/link';
// Usamos una ruta relativa simple asumiendo que ambos están en src/components
import ThemeSwitcher from './ThemeSwitcher'; 

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-black/5 dark:border-white/5 bg-white/70 dark:bg-zinc-950/70 backdrop-blur-xl transition-all duration-500">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Logo con el punto naranja "Signature" — El toque para la beca */}
        <Link href="/" className="text-sm font-bold tracking-[0.2em] uppercase text-zinc-900 dark:text-white group">
          Fernanda<span className="text-[#FF4500] group-hover:animate-pulse transition-colors">.</span>
        </Link>

        {/* Links con estilo minimalista suizo */}
        <div className="flex items-center gap-10">
          <Link href="/" className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-400 hover:text-black dark:hover:text-white transition-colors">
            Index
          </Link>
          <Link href="/about" className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-400 hover:text-black dark:hover:text-white transition-colors underline underline-offset-4 decoration-[#FF4500]/30">
            About
          </Link>
          
          {/* Componente ThemeSwitcher */}
          <div className="pl-4 border-l border-zinc-200 dark:border-zinc-800">
            <ThemeSwitcher darkClassName="dark" />
          </div>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;

