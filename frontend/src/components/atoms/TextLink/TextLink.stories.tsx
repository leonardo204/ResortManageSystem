import type { Meta, StoryObj } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import TextLink from './TextLink';

const meta = {
  title: 'Atoms/TextLink',
  component: TextLink,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
  tags: ['autodocs'],
} satisfies Meta<typeof TextLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SignUp: Story = {
  args: {
    href: '/signup',
    children: '회원가입',
  },
};

export const ResetPassword: Story = {
  args: {
    href: '/reset-password',
    children: '비밀번호 재설정',
  },
};
