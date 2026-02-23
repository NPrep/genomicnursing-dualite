import React from 'react';
import { cn } from '../../lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'accent';
  size?: 'sm' | 'md' | 'lg';
}

export const Button: React.FC<ButtonProps> = ({
  children,
  className,
  variant = 'primary',
  size = 'md',
  ...props
}) => {
  const baseStyles = "inline-flex min-h-[44px] items-center justify-center rounded-[8px] text-[15px] font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";

  const variants = {
    primary: "bg-[var(--accent)] text-white hover:bg-[var(--accent-hover)] hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(5,150,105,0.3)]",
    secondary: "border-[1.5px] border-[var(--primary)] bg-transparent text-[var(--primary)] hover:bg-[var(--primary-light)]",
    accent: "bg-[var(--accent)] text-white hover:bg-[var(--accent-hover)]",
    outline: "border-[1.5px] border-[var(--primary)] bg-transparent text-[var(--primary)] hover:bg-[var(--primary-light)]",
  };

  const sizes = {
    sm: "h-10 px-4 text-sm",
    md: "h-11 px-6",
    lg: "h-12 px-6",
  };

  return (
    <button
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
};
