import ProjectCard from '../components/ProjectCard/ProjectCard';

export const metadata = {
  title: 'Fernanda Mollocondo | Software Engineer Portfolio',
  description: 'Home page of my portfolio featuring software engineering projects.',
}

export default function Home() {
  // Lista de proyectos para mantener el código limpio y organizado
  const projects = [
    {
      logo: "/logo-placeholder.png", // Asegúrate de tener estas imágenes en /public
      name: "Theme Switcher React",
      content: "A professional dark/light mode toggle implemented with React state and Tailwind CSS classes.",
      link: "#"
    },
    {
      logo: "/logo-placeholder.png",
      name: "Project Card Component",
      content: "A reusable, responsive UI component designed for portfolio showcases with CSS effects.",
      link: "#"
    },
    {
      logo: "/logo-placeholder.png",
      name: "Next.js Portfolio",
      content: "Full portfolio website optimized for performance and accessibility using Next.js 14.",
      link: "#"
    }
  ];

  return (
    <main className="min-h-screen bg-white dark:bg-slate-900 transition-colors duration-300">
      
      {/* 1. SECCIÓN HERO */}
      <section className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto py-24 px-6 gap-12">
        <div className="flex-1 space-y-6 text-center md:text-left">
          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 dark:text-white leading-tight">
            Fernanda L. <br />
            <span className="text-blue-600">Mollocondo</span>
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-lg mx-auto md:mx-0">
            Software Engineering Student at Ensign College. 
            Passionate about legal tech, clean code, and building user-centered solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md font-semibold shadow-lg shadow-blue-200 dark:shadow-none transition">
              View Projects
            </button>
            <a 
              href="mailto:fernanda.mollocondo@gmail.com"
              className="border-2 border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white px-8 py-3 rounded-md font-semibold hover:bg-slate-50 dark:hover:bg-slate-800 transition text-center"
            >
              Get in Touch
            </a>
          </div>
        </div>

        {/* Decoración Visual / Foto */}
        <div className="flex-1 flex justify-center">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <div className="relative w-64 h-64 md:w-80 md:h-80 bg-white dark:bg-slate-800 rounded-2xl shadow-2xl flex items-center justify-center overflow-hidden">
               {/* Puedes reemplazar este span por un <Image /> de Next.js más tarde */}
               <span className="text-slate-400 font-medium">Profile Photo</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SECCIÓN DE HABILIDADES (Añadida para completar el perfil) */}
      <section className="py-12 border-y border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-8 opacity-60 grayscale hover:grayscale-0 transition-all">
            <span className="font-bold text-slate-500">React</span>
            <span className="font-bold text-slate-500">Next.js</span>
            <span className="font-bold text-slate-500">Tailwind CSS</span>
            <span className="font-bold text-slate-500">JavaScript</span>
            <span className="font-bold text-slate-500">Git/GitHub</span>
          </div>
        </div>
      </section>

      {/* 3. SECCIÓN DE PROYECTOS */}
      <section id="projects" className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Featured Projects</h2>
              <p className="text-slate-500 mt-2">A selection of my recent technical work.</p>
            </div>
            <span className="text-blue-600 font-medium cursor-pointer hover:underline">View all projects &rarr;</span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard 
                key={index}
                logo={project.logo}
                name={project.name}
                content={project.content}
                link={project.link}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 4. FOOTER (Añadido para cierre profesional) */}
      <footer className="py-12 border-t border-slate-100 dark:border-slate-800 text-center">
        <p className="text-slate-500 text-sm">
          © {new Date().getFullYear()} Fernanda Mollocondo. Built with Next.js and Tailwind CSS.
        </p>
      </footer>

    </main>
  );
}

