/**
 * CNPJWidget stories.
 * @module components/CNPJWidget/CNPJWidget.stories
 */
import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { CNPJWidget, CNPJWidgetDisplay } from './CNPJWidget';

const meta = {
  title: 'Widgets/CNPJWidget',
  component: CNPJWidget,
  tags: ['autodocs'],
  argTypes: {
    onChange: { action: 'changed' },
    onBlur: { action: 'blurred' },
    onClick: { action: 'clicked' },
  },
  args: {
    id: 'cnpj',
    title: 'CNPJ',
    placeholder: '00.000.000/0000-00',
  },
  parameters: {
    docs: {
      description: {
        component:
          'Entrada e formatação de CNPJ (Cadastro Nacional da Pessoa Jurídica).',
      },
    },
  },
} satisfies Meta<typeof CNPJWidget>;

export default meta;
type Story = StoryObj<typeof meta>;
type DisplayStory = StoryObj<typeof CNPJWidgetDisplay>;

/** An empty field. */
export const Default: Story = {};

/** A field with a value: the widget shows it formatted. */
export const WithValue: Story = {
  args: { value: '11222333000181' },
};

/** A required field. */
export const Required: Story = {
  args: { required: true },
};

/** A disabled field. */
export const Disabled: Story = {
  args: { value: '11222333000181', isDisabled: true },
};

/** A field with a validation error. */
export const WithError: Story = {
  args: { value: '11222333000180', error: ['O CNPJ informado não é válido'] },
};

/** The value, as a content view shows it. */
export const Display: DisplayStory = {
  render: (args) => <CNPJWidgetDisplay {...args} />,
  args: { value: '11222333000181' },
};
