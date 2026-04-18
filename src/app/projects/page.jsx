import { PROJECTS_PAGE_DATA } from '../../data/projectsPageData';

export const metadata = {
  title: 'Portfolio - Projects',
  description: 'The projects page of my portfolio.',
}

export default function Projects() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 font-sans selection:bg-zinc-900 selection:text-zinc-50 dark:selection:bg-zinc-100 dark:selection:text-zinc-900 transition-colors duration-300">
      <main className="max-w-7xl mx-auto px-6 py-24 md:px-12 md:py-32">
        <header className="mb-24">
          <h1 className="text-4xl md:text-6xl font-medium tracking-tight mb-6">
            Selected Works
          </h1>
          <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl font-light leading-relaxed">
            An archive of projects exploring the intersection of precise engineering, visual communication, and intentional interaction design.
          </p>
        </header>

        <div className="space-y-32">
          {PROJECTS_PAGE_DATA.map((project, idx) => (
            <article key={idx} className="group flex flex-col md:flex-row gap-8 md:gap-16 items-start">
              
              {/* Image Column */}
              <div className="w-full md:w-2/5 aspect-[4/3] bg-zinc-200 dark:bg-zinc-800 overflow-hidden relative">
                {/* Fallback pattern for when images are missing so it looks good based on your minimalist design */}
                <div className="w-full h-full flex items-center justify-center text-zinc-400 dark:text-zinc-600 font-mono tracking-widest text-xs uppercase transition-transform duration-700 ease-out group-hover:scale-105">
                  {project.title.split(' ')[0]}
                </div>
              </div>

              {/* Text Content Column */}
              <div className="w-full md:w-3/5 flex flex-col justify-center py-4">
                <div className="flex gap-4 items-center mb-6">
                  <span className="text-xs font-bold uppercase tracking-widest text-zinc-500">
                    {project.year}
                  </span>
                  <span className="w-8 h-[1px] bg-zinc-300 dark:bg-zinc-700"></span>
                  <span className="text-xs font-bold uppercase tracking-widest text-zinc-500">
                    {project.role}
                  </span>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4 group-hover:text-[#FF4500] transition-colors duration-300">
                  {project.title}
                </h2>
                
                <p className="text-zinc-600 dark:text-zinc-400 text-lg leading-relaxed font-light mb-8 max-w-xl">
                  {project.description}
                </p>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 border-t border-zinc-200 dark:border-zinc-800 pt-6">
                  <p className="text-xs text-zinc-500 font-mono uppercase tracking-widest">
                    {project.tech}
                  </p>
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block text-sm font-medium tracking-wide border-b border-zinc-900 dark:border-zinc-100 hover:text-[#FF4500] hover:border-[#FF4500] transition-all pb-1 whitespace-nowrap"
                  >
                    View Project &rarr;
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}
