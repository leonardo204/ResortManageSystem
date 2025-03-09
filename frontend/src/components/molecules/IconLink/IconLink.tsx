import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface IconLinkProps {
  href: string;
  children: ReactNode;
  icon: string;
  className?: string;
}

const IconLink = ({ href, children, icon, className }: IconLinkProps) => {
  return (
    <Link to={href} className={`flex items-center gap-1 ${className || ''}`}>
      <span className='text-[#256EF4] text-[19px] font-normal font-["Pretendard GOV"] leading-[28.5px] underline'>
        {children}
      </span>
      <img src={icon} alt='icon' className='w-6 h-6' />
    </Link>
  );
};

export default IconLink;
