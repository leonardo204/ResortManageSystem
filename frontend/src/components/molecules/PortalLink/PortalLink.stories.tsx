import type { Meta, StoryObj } from '@storybook/react';
import PortalLink from './PortalLink';

const meta = {
  title: 'Molecules/PortalLink',
  component: PortalLink,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PortalLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    href: '#',
    label: 'Group Portal',
  },
};

export const CustomClass: Story = {
  args: {
    href: '#',
    label: 'Group Portal',
    className: 'text-red-500',
  },
};
