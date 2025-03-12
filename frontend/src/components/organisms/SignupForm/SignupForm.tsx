import React, { ChangeEvent, useState } from 'react';
import Button from '../../atoms/Button/Button';

interface SignupFormProps {
  email: string;
  onSubmit: (formData: SignupFormData) => void;
}

export interface SignupFormData {
  email: string;
  nickname: string;
  password: string;
  passwordConfirm: string;
  termsAgreed: boolean;
}

const SignupForm = ({ email, onSubmit }: SignupFormProps) => {
  const [formData, setFormData] = useState<SignupFormData>({
    email,
    nickname: '',
    password: '',
    passwordConfirm: '',
    termsAgreed: false,
  });

  const [errors, setErrors] = useState({
    nickname: '',
    password: '',
    passwordConfirm: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });

    // Clear errors when user types
    if (errors[name as keyof typeof errors]) {
      setErrors({
        ...errors,
        [name]: '',
      });
    }
  };

  const validateForm = (): boolean => {
    const newErrors = {
      nickname: '',
      password: '',
      passwordConfirm: '',
    };
    let isValid = true;

    // Nickname validation (example validation)
    if (formData.nickname === '부적절한닉네임') {
      newErrors.nickname = '사용 불가능한 닉네임입니다, 다른 닉네임을 사용해주세요';
      isValid = false;
    }

    // Password validation
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    if (!passwordRegex.test(formData.password)) {
      newErrors.password = '사용 불가능한 비밀번호 입니다';
      isValid = false;
    }

    // Password confirmation validation
    if (formData.password !== formData.passwordConfirm) {
      newErrors.passwordConfirm = '비밀번호가 일치하지 않습니다';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid && formData.termsAgreed;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit(formData);
    }
  };

  const isFormValid = (): boolean => {
    return (
      formData.nickname.trim() !== '' &&
      formData.password.trim() !== '' &&
      formData.passwordConfirm.trim() !== '' &&
      formData.termsAgreed
    );
  };

  return (
    <form onSubmit={handleSubmit} className='flex flex-col items-center w-full'>
      <div className='mb-4 text-2xl font-bold text-center text-neutral-800'>
        휴양소 예약 시스템 가입을 환영합니다!
      </div>
      <div className='mb-10 text-lg text-center text-black'>
        서비스 이용을 위해 회원정보 입력과 이용 약관에 동의해 주세요
      </div>

      <div className='flex flex-col items-center w-full max-w-[360px]'>
        {/* Email Field (Disabled) */}
        <div className='mb-8 w-full'>
          <div className='mb-2 text-base text-neutral-600'>Email</div>
          <div className='flex items-center px-4 py-0 h-14 text-xl rounded-lg border border-gray-400 border-solid bg-neutral-300 text-neutral-800'>
            {email}
          </div>
        </div>

        {/* Nickname Field */}
        <div className='mb-8 w-full'>
          <div className='mb-2 text-base text-neutral-600'>닉네임</div>
          <input
            type='text'
            name='nickname'
            value={formData.nickname}
            onChange={handleChange}
            placeholder='닉네임을 입력하세요'
            className='w-full px-4 py-0 h-14 text-xl bg-white rounded-lg border border-gray-600 border-solid text-neutral-800 focus:outline-none focus:ring-2 focus:ring-blue-500'
          />
          {errors.nickname && <p className='mt-1 text-sm text-red-600'>{errors.nickname}</p>}
        </div>

        {/* Password Field */}
        <div className='mb-8 w-full'>
          <div className='mb-2 text-base text-neutral-600'>비밀번호</div>
          <input
            type='password'
            name='password'
            value={formData.password}
            onChange={handleChange}
            placeholder='비밀번호를 입력하세요'
            className='w-full px-4 py-0 h-14 text-xl bg-white rounded-lg border border-gray-600 border-solid text-neutral-800 focus:outline-none focus:ring-2 focus:ring-blue-500'
          />
          <p className='mt-1 text-sm text-gray-500 flex items-center'>
            <span className='mr-1'>ⓘ</span> 8자리 이상에 영문, 숫자 특수문자 조합
          </p>
          {errors.password && <p className='mt-1 text-sm text-red-600'>{errors.password}</p>}
        </div>

        {/* Password Confirmation Field */}
        <div className='mb-8 w-full'>
          <div className='mb-2 text-base text-neutral-600'>비밀번호 확인</div>
          <input
            type='password'
            name='passwordConfirm'
            value={formData.passwordConfirm}
            onChange={handleChange}
            placeholder='비밀번호를 다시 입력하세요'
            className='w-full px-4 py-0 h-14 text-xl bg-white rounded-lg border border-gray-600 border-solid text-neutral-800 focus:outline-none focus:ring-2 focus:ring-blue-500'
          />
          {errors.passwordConfirm && (
            <p className='mt-1 text-sm text-red-600'>{errors.passwordConfirm}</p>
          )}
        </div>

        {/* Terms Agreement (using basic checkbox) */}
        <div className='mb-8 w-full flex items-start'>
          <input
            type='checkbox'
            id='termsAgreed'
            name='termsAgreed'
            checked={formData.termsAgreed}
            onChange={handleChange}
            className='mt-1 mr-2'
          />
          <label htmlFor='termsAgreed' className='text-sm text-gray-700'>
            <span>이용약관에 동의합니다.</span>
            <button
              type='button'
              onClick={() => console.log('View terms details')}
              className='ml-1 text-blue-600 underline'
            >
              상세보기
            </button>
          </label>
        </div>

        {/* Submit Button */}
        <Button
          type='submit'
          variant='primary'
          fullWidth
          className={`h-14 text-xl rounded-lg w-full ${
            !isFormValid()
              ? 'bg-neutral-300 text-gray-500 cursor-not-allowed hover:bg-neutral-300'
              : ''
          }`}
        >
          회원가입
        </Button>
      </div>
    </form>
  );
};

export default SignupForm;
