import Image from 'next/image';
import perfilImg from '../assets/perfil.jpg';

export default function Hero() {
  return (
    <header className="py-20 md:py-32">
      <div className="container max-w-4xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-12 md:gap-20">
          
          <div className="flex-1 space-y-6">
            <h1 className="text-3xl md:text-5xl font-medium tracking-tight text-black dark:text-white leading-tight fade-in">
              Fernanda Mollocondo
            </h1>
            <div className="space-y-4 text-base md:text-lg text-[#555] dark:text-[#A0A0A0] leading-relaxed fade-in-delayed font-light">
              <p>
                Software Engineering Student
              </p>
              <p>
                I’m a software engineering student based in American Fork, building at the intersection of technology, philosophy, typography, language, and aesthetics.
              </p>
              <p>
                I design and develop digital systems that prioritize clarity, structure, and human experience. My work challenges the idea that software is purely functional—treating it instead as a medium for communication, meaning, and intentional design.
              </p>
              <p>
                Currently, I’m building at Ensign College, focusing on creating systems that are both precise and expressive.
              </p>
              <p>
                Let’s connect on <a href="https://www.linkedin.com/in/fernandamollocondo" target="_blank" rel="noopener noreferrer" className="text-black dark:text-white underline decoration-1 underline-offset-4 hover:opacity-50 transition-opacity">LinkedIn</a>.
              </p>
            </div>
          </div>

          <div className="w-full md:w-72 shrink-0 fade-in-delayed">
            <div className="relative aspect-[4/5] bg-zinc-200 dark:bg-zinc-800">
              <Image 
                src={perfilImg} 
                alt="Fernanda Mollocondo"
                width={800}
                height={1000}
                className="object-cover object-[center_20%] w-full h-full"
                priority
              />
            </div>
          </div>
          
        </div>
      </div>
    </header>
  );
}
