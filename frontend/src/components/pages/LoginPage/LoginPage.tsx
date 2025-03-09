import { useNavigate } from 'react-router-dom';
import LoginForm from '../../organisms/LoginForm/LoginForm';
import IconLink from '../../molecules/IconLink/IconLink';
import altimediaLogo from '../../../assets/images/altimedia-logo.svg';
import arrowIcon from '../../../assets/images/open-new-window.svg';

const LoginPage = () => {
  const navigate = useNavigate();

  const handleLogin = (email: string, password: string) => {
    console.log('Login attempt with:', { email, password });
    // TODO: API 호출 로직 구현
    navigate('/dashboard');
  };

  return (
    <div className='min-h-screen bg-[#E5ECF9] relative'>
      <div className='absolute right-8 top-10'>
        <IconLink href='/group-portal' icon={arrowIcon}>
          Group Portal
        </IconLink>
      </div>
      <div className='flex items-center justify-center min-h-screen'>
        <div className='w-[700px] h-[700px] bg-white rounded-[12px] shadow-[0px_4px_8px_rgba(0,0,0,0.08)] relative'>
          <div className='absolute left-1/2 transform -translate-x-1/2 top-[96px]'>
            <img src={altimediaLogo} alt='Altimedia Logo' className='w-[240px] h-[107px]' />
          </div>
          <div className='absolute left-1/2 transform -translate-x-1/2 top-[248px]'>
            <LoginForm onLogin={handleLogin} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
