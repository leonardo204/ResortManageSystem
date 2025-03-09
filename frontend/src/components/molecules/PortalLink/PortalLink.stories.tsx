import type { Meta, StoryObj } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import PortalLink from './PortalLink';

const meta = {
  title: 'Molecules/PortalLink',
  component: PortalLink,
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
} satisfies Meta<typeof PortalLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const GroupPortal: Story = {
  args: {
    href: '/group-portal',
    children: 'Group Portal',
  },
};

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
