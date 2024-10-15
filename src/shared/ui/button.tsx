import { ReactNode, ButtonHTMLAttributes } from "react"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  icon?: boolean;
}

export const Button = ({ children, icon, className = "", ...props }: ButtonProps) => {
  const buttonClass = icon 
    ? className
    : `bg-baseButton text-white py-2 px-4 rounded-lg ${className}`;

  return (
    <button className={buttonClass} {...props}>
      {children}
    </button>
  );
};