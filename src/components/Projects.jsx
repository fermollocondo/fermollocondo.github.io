export default function Projects({ items = [] }) {
  return (
    <section id="projects" className="projects py-20">
      <div className="container max-w-6xl mx-auto px-6">
        <h2 className="section-label text-sm uppercase tracking-widest text-zinc-500">Selected Works</h2>
        <div className="project-list mt-8 grid gap-6">
          {items.map((p, i) => (
            <div key={i} className="project-card p-6 border border-zinc-200 dark:border-zinc-800 rounded-lg">
              <div className="project-info">
                <span className="project-num text-xs text-zinc-400">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="mt-2 text-xl font-bold">{p.title}</h3>
                <p className="mt-2 text-zinc-600 dark:text-zinc-400">{p.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
