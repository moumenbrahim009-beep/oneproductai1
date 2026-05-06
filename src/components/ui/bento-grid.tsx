"use client";

import { cn } from "@/lib/utils";

interface BentoGridProps {
  className?: string;
  children?: React.ReactNode;
}

export function BentoGrid({ className, children }: BentoGridProps) {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[180px]",
        className
      )}
    >
      {children}
    </div>
  );
}

interface BentoGridItemProps {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  featured?: boolean;
}

export function BentoGridItem({
  className,
  title,
  description,
  header,
  icon,
  featured = false,
}: BentoGridItemProps) {
  return (
    <div
      className={cn(
        "group/bento relative flex flex-col justify-between rounded-xl border border-zinc-800 bg-zinc-900/50 p-5 backdrop-blur-sm overflow-hidden transition-all duration-300",
        "hover:border-zinc-700 hover:bg-zinc-900/70 hover:shadow-lg hover:shadow-blue-500/5",
        featured && "border-blue-500/30 bg-gradient-to-br from-blue-950/30 to-zinc-900/50",
        className
      )}
    >
      {/* background glow on hover */}
      <div className="absolute inset-0 opacity-0 group-hover/bento:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-violet-500/5" />
      </div>

      {header && <div className="mb-3 relative z-10">{header}</div>}
      <div className="relative z-10">
        {icon && (
          <div className="mb-2 w-8 h-8 rounded-lg bg-blue-600/10 border border-blue-500/20 flex items-center justify-center">
            {icon}
          </div>
        )}
        {title && (
          <div className="font-semibold text-sm text-white mb-1">{title}</div>
        )}
        {description && (
          <div className="text-xs text-zinc-400 leading-relaxed">{description}</div>
        )}
      </div>
    </div>
  );
}
