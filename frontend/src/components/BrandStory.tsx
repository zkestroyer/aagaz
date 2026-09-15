import Reveal from './Reveal';
import TextReveal from './TextReveal';

export default function BrandStory() {
  return (
    <section id="our-story" className="py-32 md:py-48 px-mobile md:px-desktop lg:px-desktop-lg bg-bone relative">
      <div className="max-w-content mx-auto flex flex-col lg:flex-row items-start lg:items-stretch gap-16 lg:gap-24">
        
        {/* LEFT COMPONENT */}
        <div className="flex-1 w-full">
          <Reveal delay={0.2} type="fade-in">
            <div className="flex items-center gap-4 mb-12">
              <span className="w-8 h-[1px] bg-obsidian"></span>
              <span className="font-body text-[10px] tracking-[0.2em] uppercase text-obsidian">
                The Aagaz Philosophy
              </span>
            </div>
          </Reveal>
          
          <div className="relative">
            <TextReveal 
              text="Every piece begins" 
              delay={0.2} 
              className="font-display text-4xl md:text-6xl lg:text-[5rem] leading-[1.1] text-obsidian tracking-tight"
            />
            <TextReveal 
              text="with an individual." 
              delay={0.35} 
              className="font-display italic text-4xl md:text-6xl lg:text-[5rem] leading-[1.1] text-obsidian tracking-tight"
            />
          </div>
        </div>

        {/* RIGHT COMPONENT */}
        <div className="flex-1 flex flex-col justify-end w-full">
          <Reveal delay={0.5} type="fade-up">
            <p className="font-body text-sm md:text-base text-obsidian/70 leading-loose max-w-md uppercase tracking-widest">
              AAGAZ brings Pakistani culture into a contemporary form, combining heritage, refined craftsmanship and modern expression to create clothing that feels distinctly yours.
            </p>
          </Reveal>
          
          <Reveal delay={0.6} type="clip-path">
            <div className="mt-16 w-full h-[1px] bg-obsidian/10 relative overflow-hidden">
               <div className="absolute top-0 left-0 h-full bg-obsidian/40 w-1/4"></div>
            </div>
          </Reveal>
        </div>

      </div>
    </section>
  );
}
