import type { Meta, StoryObj } from '@storybook/react';
import AuthLayout from './AuthLayout';

const meta = {
  title: 'Templates/AuthLayout',
  component: AuthLayout,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof AuthLayout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: '로그인',
    children: <div className='p-4 bg-gray-100 rounded'>로그인 폼이 들어갈 자리입니다.</div>,
  },
};

export const WithFooter: Story = {
  args: {
    title: '회원가입',
    children: <div className='p-4 bg-gray-100 rounded'>회원가입 폼이 들어갈 자리입니다.</div>,
    footer: <div className='text-blue-600'>이미 계정이 있으신가요? 로그인</div>,
  },
};
