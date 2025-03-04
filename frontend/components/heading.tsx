import { cn } from '@/lib/utils';
import React from 'react';

type HeadingProps = {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'; // Specifies the HTML tag
  className?: string; // Custom Tailwind classes
  children: React.ReactNode; // Content of the heading
};

const Heading: React.FC<HeadingProps> = ({
  as: Tag = 'h1',
  className,
  children,
}) => {
  const baseStyles = {
    h1: 'text-4xl font-bold tracking-tight sm:text-5xl',
    h2: 'text-3xl font-semibold tracking-tight sm:text-4xl',
    h3: 'text-2xl font-medium sm:text-3xl',
    h4: 'text-xl font-medium sm:text-2xl',
    h5: 'text-lg font-medium sm:text-xl',
    h6: 'text-base font-medium sm:text-lg',
  };

  return <Tag className={cn(baseStyles[Tag], className)}>{children}</Tag>;
};

export default Heading;
