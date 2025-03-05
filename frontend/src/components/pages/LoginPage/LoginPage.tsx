import { useNavigate } from 'react-router-dom';
import LoginForm from '../../organisms/LoginForm/LoginForm';
import altimediaLogo from '../../../assets/images/altimedia-logo.svg';

const LoginPage = () => {
  const navigate = useNavigate();

  const handleLogin = (email: string, password: string) => {
    console.log('Login attempt with:', { email, password });
    // TODO: API 호출 로직 구현
    navigate('/dashboard');
  };

  const handleSignupClick = () => {
    navigate('/signup');
  };

  const handleResetPasswordClick = () => {
    navigate('/reset-password');
  };

  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-50'>
      <div className='flex flex-col items-center'>
        <img src={altimediaLogo} alt='Altimedia Logo' className='w-48 mb-8' />
        <LoginForm
          onLogin={handleLogin}
          onSignupClick={handleSignupClick}
          onResetPasswordClick={handleResetPasswordClick}
        />
      </div>
    </div>
  );
};

export default LoginPage;
