import React, { ChangeEvent, useState } from 'react';
//import InputField from '../../atoms/InputField/InputField';
import Button from '../../atoms/Button/Button';

interface SignupFormProps {
  onSubmit: (email: string) => void;
  onCancel: () => void;
}

const SignupForm = ({ onSubmit, onCancel }: SignupFormProps) => {
  const [email, setEmail] = useState('');

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(email);
  };

  return (
    <form onSubmit={handleSubmit} className='w-full max-w-[360px]'>
      <div className='mb-36'>
        <div className='mb-2 text-base text-neutral-600'>Email</div>
        <div className='flex items-center px-4 py-0 w-full h-14 bg-white rounded-lg border border-gray-600 border-solid'>
          <input
            type='email'
            value={email}
            onChange={handleEmailChange}
            placeholder='example@altimedia.com'
            className='text-xl text-gray-400 border-none w-full h-full focus:outline-none'
            required
          />
        </div>
      </div>
      <div className='flex flex-col gap-6 w-full'>
        <Button
          type='button'
          variant='text'
          onClick={onCancel}
          fullWidth
          className='h-14 text-xl text-blue-700 bg-indigo-50 rounded-lg border border-blue-600 border-solid'
        >
          취소
        </Button>
        <Button type='submit' variant='primary' fullWidth className='h-14 text-xl rounded-lg'>
          이메일 인증하기
        </Button>
      </div>
    </form>
  );
};

export default SignupForm;
