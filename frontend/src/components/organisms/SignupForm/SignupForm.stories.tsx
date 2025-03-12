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
    email: 'example@altimedia.com',
    onSubmit: (formData) => console.log('Form submitted:', formData),
  },
  decorators: [
    (Story) => (
      <div className='bg-white p-6 rounded-xl shadow-lg'>
        <Story />
      </div>
    ),
  ],
};

export const WithPrefilledEmail: Story = {
  args: {
    email: 'user@example.com',
    onSubmit: (formData) => console.log('Form submitted:', formData),
  },
  decorators: [
    (Story) => (
      <div className='bg-white p-6 rounded-xl shadow-lg'>
        <Story />
      </div>
    ),
  ],
};
