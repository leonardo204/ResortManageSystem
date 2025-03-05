import { ReactNode } from 'react';

interface ButtonProps {
  type?: 'submit' | 'button';
  variant: 'primary' | 'text';
  children: ReactNode;
  onClick?: () => void;
  fullWidth?: boolean;
  className?: string;
}

const Button = ({
  type = 'button',
  variant,
  children,
  onClick,
  fullWidth,
  className,
}: ButtonProps) => {
  const baseStyles = 'py-2 px-4 rounded-lg font-medium transition-colors duration-200';
  const variantStyles = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700',
    text: 'text-neutral-600 hover:text-neutral-800',
  };
  const widthStyles = fullWidth ? 'w-full' : '';

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variantStyles[variant]} ${widthStyles} ${className || ''}`}
    >
      {children}
    </button>
  );
};

export default Button;
