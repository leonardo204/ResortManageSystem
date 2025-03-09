import React from 'react';
import { useNavigate } from 'react-router-dom';
import AuthLayout from '../../templates/AuthLayout/AuthLayout';
import SignupForm from '../../organisms/SignupForm/SignupForm';
import PortalLink from '../../molecules/PortalLink/PortalLink';

const SignupPage = () => {
  const navigate = useNavigate();

  const handleSubmit = (email: string) => {
    // Here you would typically handle the signup process
    console.log('Signup with email:', email);
    // After successful signup, navigate to the next step
    // navigate('/verify-email');
  };

  const handleCancel = () => {
    // Navigate back to login or home page
    navigate('/login');
  };

  return (
    <div className='flex flex-col justify-center items-center min-h-screen bg-sky-100 relative'>
      <AuthLayout title='회원가입' footer={null}>
        <div className='mb-14 text-lg text-center text-black'>
          GP 로그인 시 사용하는 Email을 입력해주세요
        </div>
        <SignupForm onSubmit={handleSubmit} onCancel={handleCancel} />
      </AuthLayout>
      <PortalLink
        href='#'
        label='Group Portal'
        className='absolute top-10 right-10 max-sm:static max-sm:mt-5'
      />
    </div>
  );
};

export default SignupPage;
