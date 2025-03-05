import { ReactNode } from 'react';

interface AuthLayoutProps {
  title: string;
  children: ReactNode;
  footer?: ReactNode;
}

const AuthLayout = ({ title, children, footer }: AuthLayoutProps) => {
  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-50'>
      <div className='max-w-md w-full space-y-8 p-6 bg-white rounded-xl shadow-lg'>
        <h2 className='text-3xl font-bold text-center'>{title}</h2>
        {children}
        {footer && <div className='mt-4 text-center'>{footer}</div>}
      </div>
    </div>
  );
};

export default AuthLayout;
