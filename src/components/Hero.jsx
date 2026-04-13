export default function Hero() {
  return (
    <header className="hero bg-white dark:bg-zinc-950">
      <div className="container max-w-6xl mx-auto px-6 py-24 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight fade-in">
          Engineering systems with <em className="not-italic font-display">meaning</em>, clarity, and design.
        </h1>
        <p className="mt-6 text-lg text-zinc-600 dark:text-zinc-400 fade-in-delayed max-w-2xl">
          Hi, I’m Fernanda — a Software Engineering student drawn to the intersection of logic, aesthetics, and human experience.
        </p>
        <div className="mt-10">
          <div className="inline-block w-8 h-8 rounded-full border-2 border-zinc-200 dark:border-zinc-700 scroll-indicator animate-bounce"></div>
        </div>
      </div>
    </header>
  );
}
