import Reveal from './Reveal';

const NAV_LINKS = [
  { label: 'Collections', href: '#collections' },
  { label: 'Bespoke', href: '#bespoke' },
  { label: 'Street Edit', href: '#street-edit' },
  { label: 'Our Story', href: '#our-story' },
  { label: 'Contact', href: '#contact' },
];

const SOCIAL_LINKS = [
  { label: 'Instagram', href: '#' },
  { label: 'Facebook', href: '#' },
  { label: 'TikTok', href: '#' },
];

export default function Footer() {
  return (
    <footer
      role="contentinfo"
      className="bg-bone pt-24 pb-12 px-mobile md:px-tablet lg:px-desktop-lg border-t border-obsidian/5"
    >
      <div className="max-w-content mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-24">
          {/* Brand */}
          <div className="lg:col-span-4">
            <Reveal delay={0.1} type="fade-up">
              <h3 className="font-display text-2xl text-obsidian uppercase tracking-[0.3em] mb-6">
                Aagaz
              </h3>
              <p className="font-body text-xs text-obsidian/50 max-w-xs leading-relaxed">
                The beginning of true individuality.
              </p>
            </Reveal>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-2">
            <nav aria-label="Footer navigation">
              <ul className="space-y-4 font-body text-[10px] uppercase tracking-[0.2em] text-obsidian">
                {NAV_LINKS.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="hover:text-terracotta transition-colors duration-300"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Social + Legal */}
          <div className="lg:col-span-2 flex flex-col gap-12">
            <ul className="space-y-4 font-body text-[10px] uppercase tracking-[0.2em] text-obsidian">
              {SOCIAL_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-terracotta transition-colors duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <ul className="space-y-4 font-body text-[9px] uppercase tracking-[0.2em] text-obsidian/40">
              <li>
                <a href="#" className="hover:text-obsidian transition-colors duration-300">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-obsidian transition-colors duration-300">
                  Terms &amp; Conditions
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-4">
            <h4 className="font-body text-[10px] uppercase tracking-[0.2em] text-obsidian mb-6">
              Stay in the loop.
            </h4>
            <form
              className="flex border-b border-obsidian/15 pb-2 group focus-within:border-obsidian transition-colors duration-300"
              onSubmit={(e) => e.preventDefault()}
              aria-label="Newsletter subscription"
            >
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                type="email"
                id="newsletter-email"
                placeholder="EMAIL ADDRESS"
                autoComplete="email"
                className="w-full bg-transparent font-body text-[10px] uppercase tracking-[0.2em] text-obsidian focus:outline-none placeholder:text-obsidian/25"
              />
              <button
                type="submit"
                className="font-body text-[10px] uppercase tracking-[0.2em] text-obsidian hover:text-terracotta transition-colors duration-300 ml-4 flex-shrink-0"
              >
                Subscribe &rarr;
              </button>
            </form>
          </div>
        </div>

        <div className="text-center font-body text-[9px] text-obsidian/30 uppercase tracking-[0.3em]">
          &copy; 2026 AAGAZ. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
