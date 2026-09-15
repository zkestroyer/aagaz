import Reveal from './Reveal';
import Button from './Button';
import TextReveal from './TextReveal';

export default function CTASection() {
  return (
    <section className="py-32 md:py-48 bg-obsidian px-mobile md:px-desktop lg:px-desktop-lg relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1603217039640-5e340d2109e2?q=80&w=2000&auto=format&fit=crop')] opacity-[0.03] bg-cover bg-center bg-no-repeat mix-blend-overlay"></div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10 flex flex-col items-center">
        <Reveal delay={0.2} type="fade-in">
          <div className="w-[1px] h-16 bg-bone/20 mb-16"></div>
        </Reveal>

        <div className="mb-12">
          <TextReveal 
            text="BEGIN" 
            delay={0.2} 
            className="font-display text-5xl md:text-7xl lg:text-[8rem] leading-none text-bone uppercase tracking-tighter" 
          />
          <TextReveal 
            text="With You." 
            delay={0.35} 
            className="font-display italic text-5xl md:text-7xl lg:text-[8rem] leading-none text-bone tracking-tight" 
          />
        </div>

        <Reveal delay={0.5} type="fade-up">
          <p className="font-body text-[10px] md:text-xs text-bone/50 max-w-lg mx-auto mb-16 uppercase tracking-[0.2em] leading-loose">
            Discover clothing that feels as individual as you are.
          </p>
        </Reveal>

        <Reveal delay={0.6} type="fade-up">
          <div className="flex flex-col sm:flex-row gap-6 justify-center w-full sm:w-auto">
            <Button variant="outline" className="border-bone/20 text-bone hover:bg-bone hover:text-obsidian" withArrow>
              Explore Aagaz
            </Button>
            <Button variant="ghost" className="text-bone/60 hover:text-terracotta text-[10px]">
              Book a Bespoke Experience
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
