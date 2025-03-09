import { useState } from 'react';
import InputField from '../../atoms/InputField/InputField';
import Button from '../../atoms/Button/Button';
import TextLink from '../../atoms/TextLink/TextLink';

interface LoginFormProps {
  onLogin?: (email: string, password: string) => void;
}

const LoginForm = ({ onLogin }: LoginFormProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onLogin) {
      onLogin(email, password);
    }
  };

  return (
    <form onSubmit={handleSubmit} className='flex flex-col items-center w-full'>
      <div className='w-[360px] max-md:w-[300px] max-sm:w-full'>
        <InputField
          label='Email'
          type='email'
          placeholder='example@altimedia.com'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <InputField
          label='Password'
          type='password'
          placeholder='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button type='submit' variant='primary' fullWidth className='mt-10'>
          로그인
        </Button>

        <div className='flex gap-1 items-center justify-center mt-14'>
          <TextLink href='/signup'>회원가입</TextLink>
          <div className='w-1 h-1 rounded-full bg-neutral-600' />
          <TextLink href='/reset-password'>비밀번호 재설정</TextLink>
        </div>
      </div>
    </form>
  );
};

export default LoginForm;
