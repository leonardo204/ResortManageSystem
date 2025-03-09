import type { Meta, StoryObj } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import IconLink from './IconLink';
import arrowIcon from '../../../assets/images/open-new-window.svg';

const meta = {
  title: 'Molecules/IconLink',
  component: IconLink,
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
} satisfies Meta<typeof IconLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const GroupPortal: Story = {
  args: {
    href: '/group-portal',
    children: 'Group Portal',
    icon: arrowIcon,
  },
};
