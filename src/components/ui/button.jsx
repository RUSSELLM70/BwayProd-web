
import { cn } from '@/lib/utils';
import { Slot } from '@radix-ui/react-slot';
import { cva } from 'class-variance-authority';
import React from 'react';

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-lg text-base font-medium transition-all duration-250 ease-out disabled:pointer-events-none disabled:grayscale-[.2] disabled:opacity-60 disabled:transform-none focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring focus-visible:ring-offset-[3px] focus-visible:ring-offset-background',
  {
    variants: {
      variant: {
        default: 'border-2 border-lime-accent text-lime-accent bg-transparent hover:bg-lime-accent hover:text-grafito hover:border-lime-deep hover:-translate-y-0.5 hover:shadow-primary-hover active:translate-y-0 active:filter active:brightness-95',
        secondary: 'border-2 border-soft-gold text-soft-gold bg-transparent hover:bg-soft-gold hover:text-grafito hover:-translate-y-0.5 hover:shadow-secondary-hover active:translate-y-0 active:filter active:brightness-95',
        destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        outline: 'border border-dark-gray-border bg-transparent text-white hover:bg-surface-highlight hover:border-lime-accent hover:text-lime-accent hover:-translate-y-0.5 active:translate-y-0',
        ghost: 'text-text-secondary hover:bg-surface-highlight hover:text-lime-accent hover:-translate-y-0.5 active:translate-y-0',
        link: 'text-primary underline-offset-4 hover:underline hover:text-lime-accent',
      },
      size: {
        default: 'h-12 px-6 py-2',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-14 rounded-xl px-8 text-lg',
        icon: 'h-10 w-10 hover:scale-105 hover:bg-surface-highlight hover:text-lime-accent',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

const Button = React.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
	const Comp = asChild ? Slot : 'button';
	return (
		<Comp
			className={cn(buttonVariants({ variant, size, className }))}
			ref={ref}
			{...props}
		/>
	);
});
Button.displayName = 'Button';

export { Button, buttonVariants };
  