import { USES_DATA } from '../../data/usesPageData';

export const metadata = {
  title: 'Portfolio - Uses',
  description: 'Software and hardware uses page of my portfolio.',
}

export default function Uses() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 font-sans selection:bg-zinc-900 selection:text-zinc-50 dark:selection:bg-zinc-100 dark:selection:text-zinc-900 transition-colors duration-300">
      <main className="max-w-4xl mx-auto px-6 py-24 md:px-12 md:py-32">
        <header className="mb-24">
          <h1 className="text-4xl md:text-6xl font-medium tracking-tight mb-6">
            Software, gadgets, and other things I recommend.
          </h1>
          <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 font-light leading-relaxed max-w-2xl">
            I get asked a lot about the things I use to build software, stay productive, or buy to fool myself into thinking I&apos;m being productive when I&apos;m really just procrastinating. Here&apos;s a big list of all of my favorite stuff.
          </p>
        </header>

        <div className="space-y-24 border-zinc-200 dark:border-zinc-800">
          {USES_DATA.map((section, idx) => (
            <section 
              key={idx} 
              className="flex flex-col md:flex-row md:items-baseline gap-12 md:gap-8 border-l-2 border-zinc-100 dark:border-zinc-800 md:border-none pl-6 md:pl-0"
            >
              {/* Category Title Column */}
              <div className="w-full md:w-1/4 shrink-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-[#FF4500] dark:text-[#FF4500]">
                  {section.groupName}
                </h2>
              </div>

              {/* Items Column */}
              <div className="w-full md:w-3/4 space-y-12">
                {section.items.map((item, itemIdx) => (
                  <article key={itemIdx} className="group">
                    <h3 className="text-xl font-medium tracking-tight mb-2 group-hover:text-[#FF4500] transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed font-light">
                      {item.description}
                    </p>
                  </article>
                ))}
              </div>
            </section>
          ))}
        </div>
      </main>
    </div>
  );
}
