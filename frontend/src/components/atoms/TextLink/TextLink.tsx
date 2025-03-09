import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface TextLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
}

const TextLink = ({ href, children, className }: TextLinkProps) => {
  return (
    <Link
      to={href}
      className={`text-[#256EF4] text-[19px] font-normal font-['Pretendard GOV'] leading-[28.5px] underline ${className || ''}`}
    >
      {children}
    </Link>
  );
};

export default TextLink;
