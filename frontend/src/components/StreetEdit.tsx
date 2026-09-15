import Button from './Button';
import Reveal from './Reveal';
import TextReveal from './TextReveal';

export default function StreetEdit() {
  return (
    <section id="street-edit" className="py-24 md:py-32 lg:py-48 bg-obsidian text-bone px-mobile md:px-desktop lg:px-desktop-lg overflow-hidden">
      <div className="max-w-content mx-auto flex flex-col lg:flex-row gap-16 lg:gap-32 items-center">
        
        <div className="flex-1 w-full flex flex-col justify-center">
          <Reveal delay={0.2} type="fade-in">
            <div className="flex items-center gap-4 mb-12">
              <span className="w-8 h-[1px] bg-terracotta"></span>
              <span className="font-body text-[10px] tracking-[0.2em] uppercase text-terracotta font-semibold">
                Contrast Series
              </span>
            </div>
          </Reveal>
          
          <div className="mb-10">
            <TextReveal 
              text="The" 
              delay={0.2} 
              className="font-display text-6xl md:text-8xl lg:text-[7rem] leading-none tracking-tighter uppercase text-bone" 
            />
            <TextReveal 
              text="Street Edit." 
              delay={0.35} 
              className="font-display italic text-6xl md:text-8xl lg:text-[7rem] leading-none tracking-tight text-bone ml-4 md:ml-12" 
            />
          </div>
          
          <Reveal delay={0.5} type="fade-up">
            <p className="font-body text-xs md:text-sm text-bone/60 uppercase tracking-[0.2em] max-w-sm leading-loose mb-12">
              Built for movement.<br/>Designed for expression.
            </p>
          </Reveal>

          <Reveal delay={0.6} type="fade-up">
            <Button variant="outline" className="border-bone/20 text-bone hover:bg-bone hover:text-obsidian" withArrow>
              Explore Street Edit
            </Button>
          </Reveal>
        </div>

        <div className="flex-1 w-full">
          <Reveal type="clip-path" delay={0.3} className="w-full aspect-[4/5] bg-obsidian border border-bone/5 relative overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?q=80&w=1400&auto=format&fit=crop" 
              alt="Street Edit Fashion" 
              loading="lazy"
              className="w-full h-full object-cover grayscale transform transition-all duration-[2000ms] ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-[1.03] hover:grayscale-0"
            />
          </Reveal>
        </div>

      </div>
    </section>
  );
}
