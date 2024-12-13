"use client";
import { cn } from "@/lib/utils";
import React from "react";

interface BackgroundAuroraProps extends React.HTMLProps<HTMLDivElement> {
  children: React.ReactNode;
  showRadialGradient?: boolean;
}

function BackgroundAurora({
  className,
  children,
  showRadialGradient = true,
  ...props
}: BackgroundAuroraProps) {
  const auroraStyles = `
    [--gradient:repeating-linear-gradient(100deg,var(--black)_0%,var(--black)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--black)_16%)]
    [--aurora:repeating-linear-gradient(100deg,var(--blue-500)_10%,var(--indigo-300)_15%,var(--blue-300)_20%,var(--violet-200)_25%,var(--blue-400)_30%)]
    [background-image:var(--gradient),var(--aurora)]
    [background-size:300%,_200%]
    [background-position:50%_50%,50%_50%]
    filter blur-[10px]
    after:content-[""] after:absolute after:inset-0 
    after:[background-image:var(--gradient),var(--aurora)]
    after:[background-size:200%,_100%] 
    after:animate-aurora after:[background-attachment:fixed] after:mix-blend-difference
    pointer-events-none
    absolute -inset-[10px] opacity-50 will-change-transform
  `;

  return (
    <main>
      <div
        className={cn(
          "relative flex flex-col h-[100vh] items-center justify-center bg-black text-white transition-bg",
          className
        )}
        {...props}>
        <div className="absolute inset-0 overflow-hidden">
          <div
            className={cn(
              auroraStyles,
              showRadialGradient &&
                `[mask-image:radial-gradient(ellipse_at_100%_0%,black_10%,var(--transparent)_70%)]`
            )}
          />
        </div>
        {children}
      </div>
    </main>
  );
}

export default BackgroundAurora;
