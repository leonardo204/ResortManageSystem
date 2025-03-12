import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import SignupForm, { SignupFormData } from '../../organisms/SignupForm/SignupForm';
import IconLink from '../../molecules/IconLink/IconLink';
import arrowIcon from '../../../assets/images/open-new-window.svg';

const SignupPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Get email from location state or use default
  const email = location.state?.email || 'example@altimedia.com';

  const handleSubmit = (formData: SignupFormData) => {
    console.log('Signup form submitted:', formData);
    // Here you would typically send the data to your API
    // For now, we'll just navigate to the login page
    navigate('/login');
  };

  return (
    <div className='flex flex-col justify-center items-center px-5 py-16 mx-auto max-w-none min-h-screen bg-sky-100 max-md:max-w-[991px] max-sm:max-w-screen-sm'>
      <div className='p-10 w-full bg-white rounded-xl max-w-[700px] shadow-[0_0_2px_rgba(0,0,0,0.05),0_4px_8px_rgba(0,0,0,0.08)] max-sm:p-5'>
        <SignupForm email={email} onSubmit={handleSubmit} />
      </div>

      {/* Group Portal Link */}
      <div className='absolute top-10 right-10 max-sm:static max-sm:mt-5'>
        <IconLink href='https://portal.altimedia.com' icon={arrowIcon}>
          Group Portal
        </IconLink>
      </div>
    </div>
  );
};

export default SignupPage;
