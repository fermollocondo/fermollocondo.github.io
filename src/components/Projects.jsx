import Image from 'next/image';

export default function Projects({ items = [] }) {
  return (
    <section id="projects" className="py-24 border-t border-black/10 dark:border-white/10">
      <div className="container max-w-4xl mx-auto px-6">
        <h2 className="text-sm uppercase tracking-widest font-bold text-black/40 dark:text-white/40 mb-12">Selected Works</h2>
        
        <div className="space-y-16">
          {items.map((p, i) => (
            <div key={i} className="flex flex-col md:flex-row gap-8 items-start group">
              <div className="md:w-1/3 shrink-0">
                <div className="aspect-[4/3] bg-black/5 dark:bg-white/5 relative overflow-hidden rounded-sm">
                  {/* Si tienes imágenes por proyecto (ej: p.image), usa next/image. 
                      Para ahora, usamos un placeholder minimalista griseado. */}
                  {i === 0 ? (
                    <Image 
                      src="/images/perfil.jpg" 
                      alt="Project" 
                      width={600} 
                      height={400} 
                      className="object-cover w-full h-full grayscale opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                    />
                  ) : (
                    <div className="w-full h-full bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center text-xs tracking-widest text-zinc-400">
                      IMG {String(i + 1).padStart(2, '0')}
                    </div>
                  )}
                </div>
              </div>
              <div className="flex-1 space-y-3">
                <a 
                  href={p.link || "#"} 
                  target={p.link ? "_blank" : "_self"} 
                  rel={p.link ? "noopener noreferrer" : ""} 
                  className="group-hover:underline underline-offset-4 decoration-1 decoration-black/20 dark:decoration-white/20 transition-all cursor-pointer block"
                >
                  <h3 className="text-xl font-medium tracking-tight text-black dark:text-white">
                    {p.title}
                  </h3>
                </a>
                <p className="text-[#555] dark:text-[#A0A0A0] leading-relaxed font-light">
                  {p.description}
                </p>
                {p.tech && (
                  <p className="text-xs text-black/50 dark:text-white/50 tracking-wide pt-2">
                    {p.tech}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
