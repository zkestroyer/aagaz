import CollectionCard from './CollectionCard';
import Reveal from './Reveal';
import TextReveal from './TextReveal';

const COLLECTIONS = [
  {
    number: "01",
    title: "PAKISTANI EDIT",
    description: "Heritage, refined.",
    imageSrc: "https://images.unsplash.com/photo-1610312278520-bcc893a3ff1d?q=80&w=1400&auto=format&fit=crop"
  },
  {
    number: "02",
    title: "STREET EDIT",
    description: "Contemporary by nature.",
    imageSrc: "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?q=80&w=1400&auto=format&fit=crop"
  },
  {
    number: "03",
    title: "BESPOKE",
    description: "Created from scratch. Made for one.",
    imageSrc: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=1400&auto=format&fit=crop"
  },
  {
    number: "04",
    title: "NEW ARRIVALS",
    description: "The latest expression of AAGAZ.",
    imageSrc: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1400&auto=format&fit=crop"
  }
];

export default function Collections() {
  return (
    <section id="collections" className="py-24 md:py-32 lg:py-40 bg-bone px-mobile md:px-desktop lg:px-desktop-lg">
      <div className="max-w-content mx-auto">
        <div className="mb-20 md:mb-32 flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
          <div className="flex-1">
            <TextReveal 
              text="The Collection." 
              delay={0.1}
              className="font-display text-5xl md:text-7xl lg:text-8xl text-obsidian tracking-tighter"
            />
          </div>
          <Reveal delay={0.3} type="fade-in" className="flex-1 md:text-right">
            <p className="font-body text-xs md:text-sm text-obsidian/60 uppercase tracking-[0.2em] leading-loose">
              "Different expressions.<br/>One identity."
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {COLLECTIONS.map((col, idx) => (
            <CollectionCard 
              key={col.number}
              index={idx}
              {...col}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
