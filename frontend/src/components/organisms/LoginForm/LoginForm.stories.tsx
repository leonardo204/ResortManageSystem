import type { Meta, StoryObj } from '@storybook/react';
import LoginForm from './LoginForm';

const meta = {
  title: 'Organisms/LoginForm',
  component: LoginForm,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof LoginForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onLogin: (email, password) => console.log('Login:', { email, password }),
    onSignupClick: () => console.log('Signup clicked'),
    onResetPasswordClick: () => console.log('Reset password clicked'),
  },
};
