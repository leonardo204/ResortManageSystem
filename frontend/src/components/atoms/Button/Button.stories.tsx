import type { Meta, StoryObj } from '@storybook/react';
import Button from './Button';

const meta = {
  title: 'Atoms/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: '버튼',
    type: 'button',
  },
};

export const Text: Story = {
  args: {
    variant: 'text',
    children: '텍스트 버튼',
    type: 'button',
  },
};

export const FullWidth: Story = {
  args: {
    variant: 'primary',
    children: '전체 너비 버튼',
    fullWidth: true,
  },
};

export const Submit: Story = {
  args: {
    variant: 'primary',
    children: '제출',
    type: 'submit',
  },
};
