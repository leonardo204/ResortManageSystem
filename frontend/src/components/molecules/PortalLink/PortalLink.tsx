import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface PortalLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
}

const PortalLink = ({ href, children, className }: PortalLinkProps) => {
  return (
    <Link
      to={href}
      className={`text-[#256EF4] text-[19px] font-normal font-['Pretendard GOV'] leading-[28.5px] underline ${className || ''}`}
    >
      {children}
    </Link>
  );
};

export default PortalLink;
