export default function SkillsSection() {
  return (
    <section id="skills" className="container max-w-4xl mx-auto px-6 py-12">
      <h2 className="text-2xl font-bold mb-6 text-zinc-800 dark:text-zinc-100">
        Skills
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-zinc-600 dark:text-zinc-400">
        <div className="p-4 border border-zinc-200 dark:border-zinc-800 rounded-lg">
          JavaScript / React
        </div>
        <div className="p-4 border border-zinc-200 dark:border-zinc-800 rounded-lg">
          HTML / CSS / Tailwind
        </div>
        <div className="p-4 border border-zinc-200 dark:border-zinc-800 rounded-lg">
          Next.js
        </div>
      </div>
    </section>
  );
}

