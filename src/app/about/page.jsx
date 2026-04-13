import Image from "next/image";

export const metadata = {
  title: 'Fer Mollocondo — About',
  description: 'The about page of my portfolio.',
}

export default function About() {
  return (
    <main className="min-h-screen bg-[#F2F2F2] dark:bg-zinc-950 text-[#111] dark:text-zinc-100 font-sans selection:bg-black selection:text-white px-6 py-12 md:px-16 md:py-24"
          style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}>
      
      <div className="max-w-[1400px] mx-auto">
        {/* NAVEGACIÓN DE REGRESO */}
        <nav className="mb-20">
          <a href="/" className="text-[10px] font-bold uppercase tracking-[0.3em] hover:opacity-50 transition-opacity border-b border-black dark:border-white pb-1">
            ← Systems Index
          </a>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* COLUMNA IZQUIERDA: EL RETRATO (Responsiveness & Dark Mode) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative aspect-[4/5] overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 rounded-sm bg-zinc-200 dark:bg-zinc-800">
              <Image 
                src="/images/perfil.jpg" 
                alt="Fernanda Mollocondo"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="flex justify-between text-[9px] font-bold uppercase tracking-widest text-zinc-400">
              <span>Portrait 001</span>
              <span>Salt Lake City, UT</span>
            </div>
          </div>

          {/* COLUMNA DERECHA: BIO & TESTIMONIALS */}
          <div className="lg:col-span-7 space-y-24">
            <section>
              <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-[0.85] mb-10">
                Deep Thinking <br /> As Practice.
              </h1>
              <div className="max-w-xl space-y-6 text-lg md:text-xl leading-relaxed font-medium">
                <p>
                  I am Fernanda Mollocondo, a Software Engineering student at Ensign College. 
                  My work exists at the intersection of logical architecture and philosophical inquiry.
                </p>
                <p className="text-zinc-500 dark:text-zinc-400">
                  I approach code as a structured language for meaning. Beyond technical fluency, 
                  I am interested in how systems define human perception and behavior.
                </p>
              </div>
            </section>

            {/* SECCIÓN DE RECOMENDACIONES (El factor ganador de la beca) */}
            <section className="border-t border-black/10 dark:border-white/10 pt-12">
              <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-400 mb-12">Faculty Perspective</h3>
              <div className="space-y-12">
                <blockquote className="max-w-2xl">
                  <p className="text-2xl md:text-3xl italic tracking-tight leading-snug mb-6">
                    "Fernanda is a deep thinker... she approaches life as a humble seeker of truth. 
                    The piece was not only well written, but it made us all think."
                  </p>
                  <cite className="text-[10px] not-italic font-bold uppercase tracking-widest text-zinc-500">
                    — English 101 Faculty Recommendation
                  </cite>
                </blockquote>
              </div>
            </section>

            {/* STATUS ACTUAL */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-black/10 dark:border-white/10 pt-12">
              <div>
                <h4 className="text-[10px] font-bold uppercase tracking-widest mb-4 text-zinc-400">Current Focus</h4>
                <p className="text-sm">Building cohesive digital systems and preparing for the Law School Admission Test (LSAT).</p>
              </div>
              <div>
                <h4 className="text-[10px] font-bold uppercase tracking-widest mb-4 text-zinc-400">Goal</h4>
                <p className="text-sm">Integration of legal logic, computational structures, and aesthetic clarity.</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}

