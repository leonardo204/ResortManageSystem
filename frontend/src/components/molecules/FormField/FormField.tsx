import { ReactNode } from 'react';

interface FormFieldProps {
  label: string;
  error?: string;
  children: ReactNode;
}

const FormField = ({ label, error, children }: FormFieldProps) => {
  return (
    <div className='mb-4'>
      <label className='block text-sm font-medium text-gray-700 mb-1'>{label}</label>
      {children}
      {error && <p className='mt-1 text-sm text-red-600'>{error}</p>}
    </div>
  );
};

export default FormField;
