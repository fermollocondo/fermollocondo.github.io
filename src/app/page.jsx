import Hero from '../components/Hero';
import Projects from '../components/Projects';

export const metadata = {
  title: 'Fernanda Mollocondo | Software Engineer Portfolio',
  description: 'Home page of my portfolio featuring software engineering projects.',
}

export default function Home() {
  const works = [
    { title: 'A Study in Clarity', description: 'Exploring user experience through the lens of cognitive load and visual silence.' },
    { title: 'Structure & Logic', description: 'A backend system built on the principles of reliability, order, and efficient architecture.' },
  ];

  return (
    <main className="min-h-screen bg-white dark:bg-zinc-950 transition-colors duration-500">
      <Hero />

      {/* ABOUT / MANIFESTO */}
      <section id="about" className="py-32 md:py-48 border-t border-zinc-100 dark:border-zinc-900">
        <div className="container max-w-5xl mx-auto px-6">
          <div className="space-y-12">
            {/* Label Estilo Suizo */}
            <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-zinc-400 block">
              Perspective / Philosophy
            </span>

            {/* El Nuevo Texto (Manifiesto) */}
            <div className="space-y-10">
              <h2 className="text-3xl md:text-5xl font-light leading-tight text-zinc-900 dark:text-zinc-100 tracking-tight max-w-4xl">
                Hi, I’m <span className="font-bold">Fernanda</span>, a Software Engineering student exploring the intersection of <span className="italic serif text-[#FF4500]">code</span>, <span className="italic serif">philosophy</span>, and <span className="italic serif">design</span>.
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-10">
                <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed font-light">
                  I’m interested in building systems that are not only functional, but also clear, intentional, and meaningful. My approach combines structured thinking with a strong sensitivity to aesthetics, particularly typography and visual composition.
                </p>
                <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed font-light">
                  As a multilingual speaker, I value perspective, adaptability, and thoughtful communication. I’m currently focused on growing as a developer while contributing to well-crafted, human-centered digital experiences.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS - Diseño más minimalista */}
      <section className="py-24 bg-zinc-50/50 dark:bg-zinc-900/20 border-y border-zinc-100 dark:border-zinc-900">
        <div className="container max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <div className="skill-group">
              <h3 className="text-[10px] uppercase tracking-widest font-bold text-zinc-400 mb-6">Technical</h3>
              <ul className="space-y-3 text-zinc-800 dark:text-zinc-200 font-medium">
                <li>Java & React</li>
                <li>Next.js & Vercel</li>
                <li>Database Architecture</li>
              </ul>
            </div>
            <div className="skill-group">
              <h3 className="text-[10px] uppercase tracking-widest font-bold text-zinc-400 mb-6">Thinking</h3>
              <ul className="space-y-3 text-zinc-800 dark:text-zinc-200 font-medium">
                <li>Structured Logic</li>
                <li>Problem Solving</li>
                <li>Typographic Systems</li>
              </ul>
            </div>
            <div className="skill-group">
              <h3 className="text-[10px] uppercase tracking-widest font-bold text-zinc-400 mb-6">Human</h3>
              <ul className="space-y-3 text-zinc-800 dark:text-zinc-200 font-medium">
                <li>Multilingual Clarity</li>
                <li>Adaptive Empathy</li>
                <li>Thoughtful Observation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <div className="py-24">
        <Projects items={works} />
      </div>

      {/* FOOTER / CONTACT */}
      <footer id="contact" className="py-32 border-t border-zinc-100 dark:border-zinc-900">
        <div className="container max-w-5xl mx-auto px-6 text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-light tracking-tighter text-zinc-900 dark:text-zinc-100">
            Let’s build something <span className="italic serif">meaningful</span>.
          </h2>
          <a 
            href="mailto:fernanda.mollocondo@gmail.com" 
            className="text-lg md:text-xl text-[#FF4500] hover:text-black dark:hover:text-white transition-colors duration-300 underline underline-offset-8 decoration-1"
          >
            fernanda.mollocondo@gmail.com
          </a>
          <div className="pt-24 text-zinc-400 text-[10px] uppercase tracking-[0.4em]">
            &copy; {new Date().getFullYear()} Fernanda Mollocondo — Built with Intention
          </div>
        </div>
      </footer>

    </main>
  );
}

