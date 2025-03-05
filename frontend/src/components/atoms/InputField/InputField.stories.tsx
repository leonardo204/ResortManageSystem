import type { Meta, StoryObj } from '@storybook/react';
import InputField from './InputField';

const meta = {
  title: 'Atoms/InputField',
  component: InputField,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof InputField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Text: Story = {
  args: {
    label: '이름',
    type: 'text',
    placeholder: '이름을 입력하세요',
    value: '',
    onChange: (e) => console.log('Changed:', e.target.value),
  },
};

export const Email: Story = {
  args: {
    label: '이메일',
    type: 'email',
    placeholder: 'example@altimedia.com',
    value: '',
    onChange: (e) => console.log('Changed:', e.target.value),
  },
};

export const Password: Story = {
  args: {
    label: '비밀번호',
    type: 'password',
    placeholder: '비밀번호를 입력하세요',
    value: '',
    onChange: (e) => console.log('Changed:', e.target.value),
  },
};
