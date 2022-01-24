import React from 'react';
import { Story } from '@storybook/react';
import { Button as ButtonComponent } from '../Button';

export default {
  title: 'Button',
  component: ButtonComponent,
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};;

const Template: Story = args => <ButtonComponent {...args} />;

export const Button = Template.bind({});

