import { ReactNode } from 'react';

interface IconProps {
  size?: 's' | 'm' | 'l'; 
  className?: string;
}

const sizes = {
  s: 16,
  m: 24,
  l: 32,
};

export const createIcon = (children: ReactNode) =>
  ({ size = 's', className }: IconProps) =>
    (
      <svg
        className={className}
        width={sizes[size]}
        height={sizes[size]}
        viewBox={`0 0 ${sizes[size]} ${sizes[size]}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {children}
      </svg>
    );
