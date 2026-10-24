/**
 * TelefoneWidget stories.
 * @module components/TelefoneWidget/TelefoneWidget.stories
 */
import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { TelefoneWidget, TelefoneWidgetDisplay } from './TelefoneWidget';

const meta = {
  title: 'Widgets/TelefoneWidget',
  component: TelefoneWidget,
  tags: ['autodocs'],
  argTypes: {
    onChange: { action: 'changed' },
    onBlur: { action: 'blurred' },
    onClick: { action: 'clicked' },
  },
  args: {
    id: 'telefone',
    title: 'Telefone',
    placeholder: '(00) 00000-0000',
  },
  parameters: {
    docs: {
      description: {
        component:
          'Entrada e formatação de telefones brasileiros, fixos e celulares, com DDD.',
      },
    },
  },
} satisfies Meta<typeof TelefoneWidget>;

export default meta;
type Story = StoryObj<typeof meta>;
type DisplayStory = StoryObj<typeof TelefoneWidgetDisplay>;

/** An empty field. */
export const Default: Story = {};

/** A field with a value: the widget shows it formatted. */
export const WithValue: Story = {
  args: { value: '11987654321' },
};

/** A required field. */
export const Required: Story = {
  args: { required: true },
};

/** A disabled field. */
export const Disabled: Story = {
  args: { value: '11987654321', isDisabled: true },
};

/** A field with a validation error. */
export const WithError: Story = {
  args: {
    value: '1198765',
    error: ['O telefone deve ser no formato (99) 9999-999 ou (99) 99999-999'],
  },
};

/** The value, as a content view shows it. */
export const Display: DisplayStory = {
  render: (args) => <TelefoneWidgetDisplay {...args} />,
  args: { value: '11987654321' },
};

/** A landline number has eight digits after the area code. */
export const Landline: Story = {
  args: { title: 'Telefone fixo', value: '1133334444' },
};

/** A landline number, as a content view shows it. */
export const DisplayLandline: DisplayStory = {
  render: (args) => <TelefoneWidgetDisplay {...args} />,
  args: { value: '1133334444' },
};
