"use client";

import { useRef } from "react";
import { cn } from "@/lib/utils";

interface MovingBorderProps {
  children: React.ReactNode;
  duration?: number;
  className?: string;
  containerClassName?: string;
  borderClassName?: string;
  as?: React.ElementType;
}

export function MovingBorder({
  children,
  duration = 3000,
  className,
  containerClassName,
  borderClassName,
  as: Component = "div",
}: MovingBorderProps) {
  const borderRef = useRef<HTMLDivElement>(null);

  return (
    <Component
      className={cn("relative p-[1px] overflow-hidden rounded-xl", containerClassName)}
    >
      {/* Animated conic gradient border */}
      <div
        ref={borderRef}
        className={cn("absolute inset-0 rounded-xl", borderClassName)}
        style={{
          background: `conic-gradient(from 0deg, transparent 0deg, rgba(37,99,235,0.8) 60deg, rgba(124,58,237,0.6) 120deg, transparent 180deg, transparent 360deg)`,
          animation: `spin ${duration}ms linear infinite`,
          filter: "blur(2px)",
        }}
      />
      {/* Inner content */}
      <div
        className={cn(
          "relative rounded-xl bg-zinc-900 z-10",
          className
        )}
      >
        {children}
      </div>
      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </Component>
  );
}

export function MovingBorderButton({
  children,
  duration = 2000,
  className,
  containerClassName,
  onClick,
  href,
}: {
  children: React.ReactNode;
  duration?: number;
  className?: string;
  containerClassName?: string;
  onClick?: () => void;
  href?: string;
}) {
  const inner = (
    <div
      className={cn(
        "relative p-[1.5px] overflow-hidden rounded-xl inline-block cursor-pointer group",
        containerClassName
      )}
    >
      <div
        className="absolute inset-0 rounded-xl"
        style={{
          background: `conic-gradient(from var(--border-angle, 0deg), rgba(37,99,235,0) 0deg, rgba(37,99,235,1) 60deg, rgba(124,58,237,0.8) 120deg, rgba(37,99,235,0) 180deg)`,
          animation: `border-rotate ${duration}ms linear infinite`,
        }}
      />
      <div
        className={cn(
          "relative bg-blue-600 group-hover:bg-blue-500 text-white font-semibold px-8 py-4 rounded-xl z-10 transition-colors",
          className
        )}
      >
        {children}
      </div>
      <style>{`
        @property --border-angle {
          syntax: '<angle>';
          initial-value: 0deg;
          inherits: false;
        }
        @keyframes border-rotate {
          from { --border-angle: 0deg; }
          to { --border-angle: 360deg; }
        }
      `}</style>
    </div>
  );

  if (href) {
    return <a href={href}>{inner}</a>;
  }

  return (
    <button onClick={onClick} type="button">
      {inner}
    </button>
  );
}
