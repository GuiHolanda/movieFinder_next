import { clsx } from 'clsx';
import { Slot } from '@radix-ui/react-slot';
import { ReactNode } from 'react';

interface IHeadingProps {
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
  asChild?: boolean;
  className?: string;
}

export function Heading({
  size = 'md',
  children,
  asChild,
  className,
}: IHeadingProps) {
  const Comp = asChild ? Slot : 'h2';
  return (
    <Comp
      className={clsx(
        `sm:text-3xl my-2`,
        {
          'text-base': size === 'sm',
          'text-xl': size === 'md',
          'text-2xl': size === 'lg',
        },
        className
      )}
    >
      {children}
    </Comp>
  );
}
