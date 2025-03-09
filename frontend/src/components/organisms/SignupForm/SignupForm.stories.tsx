import type { Meta, StoryObj } from '@storybook/react';
import SignupForm from './SignupForm';

const meta = {
  title: 'Organisms/SignupForm',
  component: SignupForm,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SignupForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onSubmit: (email) => console.log('Submit with email:', email),
    onCancel: () => console.log('Cancelled'),
  },
  decorators: [
    (Story) => (
      <div className='bg-white p-6 rounded-xl shadow-lg'>
        <Story />
      </div>
    ),
  ],
};
