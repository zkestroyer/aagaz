import Reveal from './Reveal';
import TextReveal from './TextReveal';

export default function HeritageSection() {
  return (
    <section className="py-24 md:py-32 bg-bone px-mobile md:px-desktop lg:px-desktop-lg overflow-hidden">
      <div className="max-w-content mx-auto relative">
        <div className="relative z-20 text-center mb-16 md:mb-24 flex flex-col items-center">
          <TextReveal 
            text="ROOTED" 
            delay={0.2} 
            className="font-display text-[15vw] lg:text-[10vw] leading-[0.8] text-obsidian tracking-tighter uppercase" 
          />
          <TextReveal 
            text="Here." 
            delay={0.35} 
            className="font-display italic text-[12vw] lg:text-[8vw] leading-[0.9] text-obsidian tracking-tight" 
          />
          
          <Reveal delay={0.5} type="fade-up">
            <p className="mt-12 font-body text-[10px] md:text-xs text-obsidian uppercase tracking-[0.2em] max-w-lg mx-auto leading-loose">
              Tradition isn't something we leave behind. <br className="hidden md:block" />It is something we reinterpret.
            </p>
          </Reveal>
        </div>

        <Reveal type="clip-path" delay={0.4} className="w-full aspect-[4/5] md:aspect-[21/9] bg-sand relative overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1610312278520-bcc893a3ff1d?q=80&w=2000&auto=format&fit=crop" 
            alt="Pakistani Craftsmanship" 
            loading="lazy"
            className="w-full h-full object-cover object-top transform transition-transform duration-[3000ms] ease-out hover:scale-[1.03]"
          />
          <div className="absolute inset-0 bg-obsidian/5 mix-blend-multiply transition-opacity duration-1000 hover:opacity-0"></div>
        </Reveal>

        <Reveal delay={0.7} type="fade-up">
          <div className="mt-12 flex flex-col md:flex-row justify-between items-center font-body text-[9px] text-obsidian/40 uppercase tracking-[0.3em] gap-4">
            <span>PAKISTANI CULTURE</span>
            <span className="hidden md:block flex-1 max-w-[100px] h-[1px] bg-obsidian/10"></span>
            <span>CONTEMPORARY DESIGN</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
