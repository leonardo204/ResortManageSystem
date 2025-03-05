import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface PortalLinkProps {
  href: string;
  children: ReactNode;
}

const PortalLink = ({ href, children }: PortalLinkProps) => {
  return (
    <Link to={href} className='text-blue-600 hover:text-blue-800 text-sm font-medium'>
      {children}
    </Link>
  );
};

export default PortalLink;
