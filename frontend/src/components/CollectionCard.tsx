import { ArrowRight } from 'lucide-react';
import Reveal from './Reveal';

interface CollectionCardProps {
  number: string;
  title: string;
  description: string;
  imageSrc: string;
  index: number;
}

export default function CollectionCard({ number, title, description, imageSrc, index }: CollectionCardProps) {
  return (
    <Reveal type="fade-up" delay={0.2 + (index * 0.1)} className="group cursor-pointer block">
      <div className="relative overflow-hidden aspect-[3/4] md:aspect-[4/5] bg-sand mb-6">
        <img 
          src={imageSrc} 
          alt={title} 
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.05]"
        />
        <div className="absolute inset-0 bg-obsidian/10 transition-colors duration-[800ms] group-hover:bg-obsidian/20 mix-blend-overlay" />
        
        {/* Number Badge */}
        <div className="absolute top-6 left-6 font-display text-2xl lg:text-3xl text-bone transition-transform duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-2">
          {number}
        </div>
      </div>

      <div className="flex flex-col relative pr-4">
        <div className="flex justify-between items-center mb-3">
          <h3 className="font-body font-semibold text-xs tracking-[0.2em] uppercase text-obsidian transition-transform duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-2">
            {title}
          </h3>
          <div className="overflow-hidden relative w-5 h-5">
            <ArrowRight className="absolute inset-0 w-5 h-5 text-obsidian transition-transform duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-full" />
            <ArrowRight className="absolute inset-0 w-5 h-5 text-terracotta -translate-x-full transition-transform duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-0" />
          </div>
        </div>
        <p className="font-body text-[10px] uppercase tracking-[0.15em] text-obsidian/50 transition-colors duration-[800ms] group-hover:text-obsidian/70">
          {description}
        </p>
      </div>
    </Reveal>
  );
}
