import { ChangeEvent } from 'react';

interface InputFieldProps {
  label: string;
  type: 'text' | 'email' | 'password';
  placeholder: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const InputField = ({ label, type, placeholder, value, onChange }: InputFieldProps) => {
  return (
    <div className='mb-4'>
      <label className='block text-sm font-medium text-gray-700 mb-1'>{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
      />
    </div>
  );
};

export default InputField;
