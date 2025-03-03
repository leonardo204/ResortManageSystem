import React from 'react';
import arrowIcon from '../assets/images/arrow-icon.svg';

interface InputDesignProps {
  onSubmit?: (email: string) => void;
  onCancel?: () => void;
}

const InputDesign: React.FC<InputDesignProps> = ({ onSubmit, onCancel }) => {
  const [email, setEmail] = React.useState<string>('');

  const handleSubmit = () => {
    if (onSubmit) {
      onSubmit(email);
    }
  };

  const handleCancel = () => {
    if (onCancel) {
      onCancel();
    }
  };

  return (
    <div className='flex overflow-hidden flex-col pt-10 pr-10 pb-48 pl-20 bg-sky-100 max-md:px-5 max-md:pb-24'>
      <div className='flex gap-1 items-center self-end px-0.5 text-xl text-blue-600 underline'>
        <div className='self-stretch my-auto underline decoration-auto decoration-solid min-h-[29px] underline-offset-auto'>
          Group Portal
        </div>
        <img
          src={arrowIcon}
          alt='Arrow'
          className='object-contain shrink-0 self-stretch my-auto w-6 aspect-square'
        />
      </div>
      <div className='flex flex-col justify-center items-center self-center px-20 py-20 mt-32 max-w-full bg-white rounded-xl shadow w-[700px] max-md:px-5 max-md:mt-10'>
        <div className='flex flex-col max-w-full w-[360px]'>
          <div className='gap-1 self-center px-1 text-2xl font-bold tracking-normal text-center whitespace-nowrap rounded-lg bg-white bg-opacity-0 min-h-14 text-neutral-800'>
            회원가입
          </div>
          <div className='self-center mt-4 text-lg tracking-normal text-center text-black'>
            GP 로그인 시 사용하는 Email을 입력해주세요
          </div>
          <div className='mt-14 w-full whitespace-nowrap max-md:mt-10'>
            <div className='text-base tracking-normal text-neutral-600'>Email</div>
            <input
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder='example@altimedia.com'
              className='flex-1 shrink gap-2 self-stretch px-4 mt-2 w-full text-xl tracking-normal text-gray-400 bg-white rounded-lg border border-gray-600 border-solid basis-0 min-h-14'
            />
          </div>
          <button
            onClick={handleCancel}
            className='flex-1 shrink gap-1 self-stretch px-5 mt-36 text-xl tracking-normal text-center text-blue-700 whitespace-nowrap bg-indigo-50 rounded-lg border border-blue-600 border-solid basis-0 min-h-14 min-w-[90px] max-md:mt-10'
          >
            취소
          </button>
          <button
            onClick={handleSubmit}
            className='flex-1 shrink gap-1 self-stretch px-5 mt-6 text-xl tracking-normal text-center text-white bg-blue-600 rounded-lg basis-0 min-h-14 min-w-[90px]'
          >
            이메일 인증하기
          </button>
        </div>
      </div>
    </div>
  );
};

export default InputDesign;
