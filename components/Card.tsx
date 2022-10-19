import { Slot } from '@radix-ui/react-slot';
import clsx from 'clsx';
import { ReactNode } from 'react';

interface ICardProps {
  children: ReactNode;
  className?: string;
}

function CardRoot({ children, className }: ICardProps) {
  return <div className={`${className}`}>{children}</div>;
}

export interface ICardImageProps {
  children: ReactNode;
  asChild?: Boolean;
  className?: string;
}

function CardImage({ children, className }: ICardImageProps) {
  return (
    <Slot className={clsx(` rounded-t-lg w-48 h-72`, className)}>
      {children}
    </Slot>
  );
}

function CardDetails({ children, className }: ICardProps) {
  return (
    <div
      className={`${className} bg-red-800 rounded-b-lg text-white font-bold p-2`}
    >
      {children}
    </div>
  );
}

export const Card = {
  Root: CardRoot,
  Image: CardImage,
  Details: CardDetails,
};
