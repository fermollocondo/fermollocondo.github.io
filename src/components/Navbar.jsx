'use client'; // Necesario en Next.js para componentes con botones o estado
import Link from 'next/link';
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher'; // Asegúrate de que la ruta sea correcta

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        
        {/* Logo o Nombre */}
        <Link href="/" className="text-xl font-bold text-slate-900 dark:text-white hover:text-blue-600 transition">
          Fernanda<span className="text-blue-600">.</span>
        </Link>

        {/* Links de Navegación */}
        <div className="flex items-center gap-6">
          <Link href="/" className="hidden md:block text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-white transition">
            Home
          </Link>
          <Link href="/about" className="hidden md:block text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-white transition">
            About
          </Link>
          
          {/* Tu componente estrella del reto anterior */}
          <ThemeSwitcher darkClassName="dark" />
        </div>

      </div>
    </nav>
  );
};

export default Navbar;

