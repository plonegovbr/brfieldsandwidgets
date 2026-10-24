/**
 * CPFWidget stories.
 * @module components/CPFWidget/CPFWidget.stories
 */
import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { CPFWidget, CPFWidgetDisplay } from './CPFWidget';

const meta = {
  title: 'Widgets/CPFWidget',
  component: CPFWidget,
  tags: ['autodocs'],
  argTypes: {
    onChange: { action: 'changed' },
    onBlur: { action: 'blurred' },
    onClick: { action: 'clicked' },
  },
  args: {
    id: 'cpf',
    title: 'CPF',
    placeholder: '000.000.000-00',
  },
  parameters: {
    docs: {
      description: {
        component: 'Entrada e formatação de CPF (Cadastro de Pessoas Físicas).',
      },
    },
  },
} satisfies Meta<typeof CPFWidget>;

export default meta;
type Story = StoryObj<typeof meta>;
type DisplayStory = StoryObj<typeof CPFWidgetDisplay>;

/** An empty field. */
export const Default: Story = {};

/** A field with a value: the widget shows it formatted. */
export const WithValue: Story = {
  args: { value: '37731335453' },
};

/** A required field. */
export const Required: Story = {
  args: { required: true },
};

/** A disabled field. */
export const Disabled: Story = {
  args: { value: '37731335453', isDisabled: true },
};

/** A field with a validation error. */
export const WithError: Story = {
  args: { value: '37731335450', error: ['O CPF informado não é válido'] },
};

/** The value, as a content view shows it. */
export const Display: DisplayStory = {
  render: (args) => <CPFWidgetDisplay {...args} />,
  args: { value: '37731335453' },
};

/** A value the backend masked for privacy is shown as it is. */
export const DisplayMasked: DisplayStory = {
  render: (args) => <CPFWidgetDisplay {...args} />,
  args: { value: '***.313.354-**' },
};
