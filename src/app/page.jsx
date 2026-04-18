import Hero from '../components/Hero';
import Projects from '../components/Projects';
import AboutSection from '../components/AboutSection';
import SkillsSection from '../components/SkillsSection';
import Footer from '../components/Footer';
import { PROJECTS_DATA } from '../data/portfolio';

export const metadata = {
  title: 'Fernanda Mollocondo | Software Engineer Portfolio',
  description: 'Home page of my portfolio featuring software engineering projects.',
}

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-zinc-950 transition-colors duration-500">
      <Hero />
      <AboutSection />
      <SkillsSection />
      
      <div className="py-12">
        <Projects items={PROJECTS_DATA} />
      </div>

      <Footer />
    </main>
  );
}

