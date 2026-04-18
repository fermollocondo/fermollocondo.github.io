import { ABOUT_DATA } from '../data/portfolio';

export default function AboutSection() {
  return (
    <section id="about" className="py-24 md:py-32 border-t border-zinc-100 dark:border-zinc-900">
      <div className="container max-w-4xl mx-auto px-6">
        <div className="space-y-12">
          <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-zinc-400 block">
            {ABOUT_DATA.sectionTitle}
          </span>

          <div className="space-y-10">
            <h2 className="text-2xl md:text-4xl font-light leading-tight text-zinc-900 dark:text-zinc-100 tracking-tight max-w-3xl">
              {ABOUT_DATA.heading}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-10">
              {ABOUT_DATA.paragraphs.map((text, idx) => (
                <p key={idx} className="text-base text-zinc-600 dark:text-zinc-400 leading-relaxed font-light">
                  {text}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
