/**
 * CEPWidget stories.
 * @module components/CEPWidget/CEPWidget.stories
 */
import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { CEPWidget, CEPWidgetDisplay } from './CEPWidget';

const meta = {
  title: 'Widgets/CEPWidget',
  component: CEPWidget,
  tags: ['autodocs'],
  argTypes: {
    onChange: { action: 'changed' },
    onBlur: { action: 'blurred' },
    onClick: { action: 'clicked' },
  },
  args: {
    id: 'cep',
    title: 'CEP',
    placeholder: '00000-000',
  },
  parameters: {
    docs: {
      description: {
        component:
          'Entrada e formatação de CEP (Código de Endereçamento Postal).',
      },
    },
  },
} satisfies Meta<typeof CEPWidget>;

export default meta;
type Story = StoryObj<typeof meta>;
type DisplayStory = StoryObj<typeof CEPWidgetDisplay>;

/** An empty field. */
export const Default: Story = {};

/** A field with a value: the widget shows it formatted. */
export const WithValue: Story = {
  args: { value: '01310100' },
};

/** A required field. */
export const Required: Story = {
  args: { required: true },
};

/** A disabled field. */
export const Disabled: Story = {
  args: { value: '01310100', isDisabled: true },
};

/** A field with a validation error. */
export const WithError: Story = {
  args: { value: '12345', error: ['O CEP deve ser no formato 99999-999'] },
};

/** The value, as a content view shows it. */
export const Display: DisplayStory = {
  render: (args) => <CEPWidgetDisplay {...args} />,
  args: { value: '01310100' },
};
