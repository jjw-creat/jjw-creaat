"use client";

import {
  cloneElement,
  isValidElement,
  type HTMLAttributes,
  type ReactElement,
  type ReactNode,
  useState
} from "react";
import { cn } from "@/lib/utils";

type SpotlightSurfaceProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  asChild?: boolean;
};

export function SpotlightSurface({
  children,
  className,
  asChild = false,
  onMouseLeave,
  onMouseMove,
  ...props
}: SpotlightSurfaceProps) {
  const [position, setPosition] = useState({ x: 50, y: 50, active: false });

  const overlay = (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 rounded-[inherit] transition-opacity duration-300 ease-expo motion-reduce:hidden"
      style={{
        background: `radial-gradient(300px circle at ${position.x}% ${position.y}%, rgba(94,106,210,0.18), transparent 70%)`,
        opacity: position.active ? 1 : 0
      }}
    />
  );

  const handlers = {
    onMouseMove: (event: React.MouseEvent<HTMLDivElement>) => {
      const rect = event.currentTarget.getBoundingClientRect();
      setPosition({
        x: ((event.clientX - rect.left) / rect.width) * 100,
        y: ((event.clientY - rect.top) / rect.height) * 100,
        active: true
      });
      onMouseMove?.(event);
    },
    onMouseLeave: (event: React.MouseEvent<HTMLDivElement>) => {
      setPosition((current) => ({ ...current, active: false }));
      onMouseLeave?.(event);
    }
  };

  if (asChild && isValidElement(children)) {
    const element = children as ReactElement<{ className?: string; children?: ReactNode }>;
    return cloneElement(element, {
      ...props,
      ...handlers,
      className: cn("relative isolate overflow-hidden", className, element.props.className),
      children: (
        <>
          {overlay}
          <div className="relative z-10">{element.props.children}</div>
        </>
      )
    });
  }

  return (
    <div
      {...props}
      {...handlers}
      className={cn("relative isolate overflow-hidden rounded-[inherit]", className)}
    >
      {overlay}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
