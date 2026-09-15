import { cn } from '@/utils/cn';
import { ArrowUpRight } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  withArrow?: boolean;
}

export default function Button({
  children,
  variant = 'primary',
  withArrow = false,
  className,
  ...props
}: ButtonProps) {
  const baseStyles =
    "group relative inline-flex items-center justify-center font-body text-[10px] tracking-[0.15em] uppercase transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] border cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed";

  const variants = {
    primary:
      "bg-obsidian text-bone border-obsidian hover:bg-transparent hover:text-obsidian",
    secondary:
      "bg-bone text-obsidian border-obsidian hover:bg-obsidian hover:text-bone",
    outline:
      "bg-transparent text-obsidian border-obsidian/20 hover:border-obsidian",
    ghost:
      "bg-transparent text-obsidian border-transparent hover:text-terracotta",
  };

  return (
    <button
      className={cn(baseStyles, variants[variant], "py-3.5 px-7", className)}
      {...props}
    >
      <span>{children}</span>
      {withArrow && (
        <ArrowUpRight
          className="ml-2 w-3.5 h-3.5 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          aria-hidden="true"
        />
      )}
    </button>
  );
}
