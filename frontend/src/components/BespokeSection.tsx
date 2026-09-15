import Reveal from './Reveal';
import TextReveal from './TextReveal';

const STEPS = [
  { num: "01", title: "Consult", subtitle: "Measured" },
  { num: "02", title: "Design", subtitle: "Designed" },
  { num: "03", title: "Craft", subtitle: "Crafted" },
  { num: "04", title: "Deliver", subtitle: "Yours" },
];

export default function BespokeSection() {
  return (
    <section id="bespoke" className="py-24 md:py-32 lg:py-48 bg-bone px-mobile md:px-desktop lg:px-desktop-lg">
      <div className="max-w-content mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-32 items-center">
          
          <div className="flex-1 w-full order-2 lg:order-1">
            <Reveal type="clip-path" delay={0.2} className="w-full aspect-[4/5] lg:aspect-[3/4] bg-sand relative overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=1600&auto=format&fit=crop" 
                alt="Bespoke Tailoring" 
                loading="lazy"
                className="w-full h-full object-cover transform transition-transform duration-[2000ms] hover:scale-[1.03]"
              />
            </Reveal>
          </div>

          <div className="flex-1 flex flex-col justify-center order-1 lg:order-2 w-full relative">
            <Reveal delay={0.1} type="fade-in">
               <div className="font-body text-[10px] tracking-[0.2em] uppercase text-obsidian/60 mb-10 flex items-center gap-4">
                 <span className="w-6 h-[1px] bg-obsidian/30"></span>
                 AAGAZ BESPOKE
               </div>
            </Reveal>

            <div className="mb-12">
              <TextReveal text="Made For" delay={0.2} className="font-display text-6xl md:text-8xl text-obsidian tracking-tighter uppercase" />
              <TextReveal text="One." delay={0.35} className="font-display italic text-6xl md:text-8xl text-obsidian tracking-tighter" />
            </div>

            <Reveal delay={0.5} type="fade-up">
              <p className="font-body text-xs md:text-sm text-obsidian/70 leading-loose mb-20 max-w-lg uppercase tracking-[0.15em]">
                Every custom suit begins from scratch — designed around you, crafted with precision, and made to exist as your own.
              </p>
            </Reveal>

            {/* Timeline */}
            <div className="relative">
              <div className="absolute left-[15px] top-0 bottom-0 w-[1px] bg-obsidian/10 md:left-0 md:top-[30px] md:bottom-auto md:w-full md:h-[1px]"></div>
              
              <div className="flex flex-col md:flex-row justify-between gap-10 md:gap-4 relative z-10">
                {STEPS.map((step, idx) => (
                  <Reveal key={step.num} type="fade-up" delay={0.6 + (idx * 0.1)} className="flex md:flex-col items-center md:items-start gap-6 md:gap-4 bg-bone md:bg-transparent pr-4 md:pr-0">
                    <div className="w-8 h-8 rounded-full bg-bone border border-obsidian/20 flex items-center justify-center font-display text-xs text-obsidian z-10 shrink-0">
                      {step.num}
                    </div>
                    <div>
                      <h4 className="font-body font-semibold text-[10px] uppercase tracking-[0.2em] text-obsidian mb-1">
                        {step.title}
                      </h4>
                      <p className="font-body text-[10px] text-obsidian/40 uppercase tracking-[0.2em]">
                        {step.subtitle}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}
