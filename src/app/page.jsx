import Hero from '../components/Hero';
import Projects from '../components/Projects';

export const metadata = {
  title: 'Fernanda Mollocondo | Software Engineer Portfolio',
  description: 'Home page of my portfolio featuring software engineering projects.',
}

export default function Home() {
  const works = [
    { 
      title: 'Colour Systems 1', 
      description: 'An exploration of color theory, semantic relationships, and structured palettes to build intentional visual systems.',
      link: 'https://www.behance.net/gallery/172503633/Colour-Systems-1?tracking_source=project_owner_other_projects',
      tech: 'Color Theory / Visual Systems'
    },
    { 
      title: 'Cabinet Philosophical Salon', 
      description: 'A dedicated space—both conceptual and physical—for rigorous thought, creative exploration, and multidisciplinary dialogue.',
      link: 'https://www.behance.net/gallery/209720615/Cabinet-Philosophical-Salon',
      tech: 'Branding / Typography / Visual Systems'
    },
  ];

  return (
    <main className="min-h-screen bg-white dark:bg-zinc-950 transition-colors duration-500">
      <Hero />

      {/* ABOUT / MANIFESTO */}
      <section id="about" className="py-24 md:py-32 border-t border-zinc-100 dark:border-zinc-900">
        <div className="container max-w-4xl mx-auto px-6">
          <div className="space-y-12">
            <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-zinc-400 block">
              Perspective / Philosophy
            </span>

            <div className="space-y-10">
              <h2 className="text-2xl md:text-4xl font-light leading-tight text-zinc-900 dark:text-zinc-100 tracking-tight max-w-3xl">
                I’m interested in building systems that are not only functional, but also clear, intentional, and meaningful.
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-10">
                <p className="text-base text-zinc-600 dark:text-zinc-400 leading-relaxed font-light">
                  My approach combines structured thinking with a strong sensitivity to aesthetics, particularly typography and visual composition.
                </p>
                <p className="text-base text-zinc-600 dark:text-zinc-400 leading-relaxed font-light">
                  As a multilingual speaker, I value perspective, adaptability, and thoughtful communication. I’m currently focused on growing as a developer while contributing to well-crafted, human-centered digital experiences.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS - Diseño más minimalista */}
      <section className="py-24 border-y border-zinc-100 dark:border-zinc-900">
        <div className="container max-w-4xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="skill-group">
              <h3 className="text-[10px] uppercase tracking-widest font-bold text-zinc-400 mb-6">Technical</h3>
              <ul className="space-y-3 text-sm text-zinc-800 dark:text-zinc-200">
                <li>Java & React</li>
                <li>Next.js & Vercel</li>
                <li>Database Architecture</li>
              </ul>
            </div>
            <div className="skill-group">
              <h3 className="text-[10px] uppercase tracking-widest font-bold text-zinc-400 mb-6">Thinking</h3>
              <ul className="space-y-3 text-sm text-zinc-800 dark:text-zinc-200">
                <li>Structured Logic</li>
                <li>Problem Solving</li>
                <li>Typographic Systems</li>
              </ul>
            </div>
            <div className="skill-group">
              <h3 className="text-[10px] uppercase tracking-widest font-bold text-zinc-400 mb-6">Human</h3>
              <ul className="space-y-3 text-sm text-zinc-800 dark:text-zinc-200">
                <li>Multilingual Clarity</li>
                <li>Adaptive Empathy</li>
                <li>Thoughtful Observation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <div className="py-12">
        <Projects items={works} />
      </div>

      {/* FOOTER / CONTACT */}
      <footer id="contact" className="py-32 border-t border-zinc-100 dark:border-zinc-900">
        <div className="container max-w-4xl mx-auto px-6 space-y-8">
          <h2 className="text-3xl md:text-5xl font-light tracking-tighter text-zinc-900 dark:text-zinc-100 text-center">
            Let's build something <span className="italic serif">meaningful</span>.
          </h2>
          <div className="text-center">
            <a 
              href="mailto:fernanda.mollocondo@gmail.com" 
              className="text-lg text-black hover:text-[#FF4500] dark:text-white transition-colors duration-300 underline underline-offset-8 decoration-1"
            >
              fernanda.mollocondo@gmail.com
            </a>
          </div>
          
          <div className="flex justify-center gap-6 mt-8">
            <a href="https://www.linkedin.com/in/fernandamollocondo" target="_blank" rel="noopener noreferrer" className="text-xs uppercase tracking-widest text-[#555] dark:text-[#A0A0A0] hover:text-[#FF4500] transition-colors">
              LinkedIn
            </a>
            <a href="https://www.behance.net/m2systems" target="_blank" rel="noopener noreferrer" className="text-xs uppercase tracking-widest text-[#555] dark:text-[#A0A0A0] hover:text-[#FF4500] transition-colors">
              Behance
            </a>
          </div>

          <div className="pt-24 flex justify-between items-center text-zinc-400 text-[10px] uppercase tracking-[0.2em]">
            <span>&copy; {new Date().getFullYear()} Fernanda Mollocondo</span>
            <span>Built with Intention</span>
          </div>
        </div>
      </footer>
    </main>
  );
}

