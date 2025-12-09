/**
 * TelefoneWidget Storybook
 * @module components/TelefoneWidget/TelefoneWidget.stories
 */
import React from 'react';
import { TelefoneWidget, TelefoneWidgetDisplay } from './TelefoneWidget';

export default {
  title: 'Widgets/TelefoneWidget',
  component: TelefoneWidget,
  argTypes: {
    onChange: { action: 'changed' },
    onBlur: { action: 'blurred' },
    onClick: { action: 'clicked' },
  },
  parameters: {
    docs: {
      description: {
        component:
          'Widget para entrada e formatação de números de telefone brasileiros (fixo e celular).',
      },
    },
  },
};

const Template = (args) => <TelefoneWidget {...args} />;

export const Default = Template.bind({});
Default.args = {
  id: 'telefone',
  title: 'Telefone',
  description: 'Digite o telefone com DDD',
  required: false,
  value: '',
  placeholder: '(00) 0000-0000',
};

export const WithCelular = Template.bind({});
WithCelular.args = {
  id: 'telefone',
  title: 'Telefone Celular',
  description: 'Número de celular com 9 dígitos',
  value: '11987654321',
};

export const WithFixo = Template.bind({});
WithFixo.args = {
  id: 'telefone',
  title: 'Telefone Fixo',
  description: 'Número de telefone fixo com 8 dígitos',
  value: '1133334444',
};

export const Required = Template.bind({});
Required.args = {
  id: 'telefone',
  title: 'Telefone',
  description: 'Campo obrigatório',
  required: true,
  value: '',
};

export const Disabled = Template.bind({});
Disabled.args = {
  id: 'telefone',
  title: 'Telefone',
  description: 'Campo desabilitado',
  value: '11987654321',
  isDisabled: true,
};

export const WithError = Template.bind({});
WithError.args = {
  id: 'telefone',
  title: 'Telefone',
  description: 'Campo com erro de validação',
  value: '1198765',
  error: ['Telefone inválido'],
};

// Display Component Stories
const DisplayTemplate = (args) => <TelefoneWidgetDisplay {...args} />;

export const DisplayCelular = DisplayTemplate.bind({});
DisplayCelular.args = {
  value: '11987654321',
  className: '',
};
DisplayCelular.parameters = {
  docs: {
    description: {
      story:
        'Componente de exibição do telefone celular formatado (somente leitura).',
    },
  },
};

export const DisplayFixo = DisplayTemplate.bind({});
DisplayFixo.args = {
  value: '1133334444',
  className: '',
};
DisplayFixo.parameters = {
  docs: {
    description: {
      story:
        'Componente de exibição do telefone fixo formatado (somente leitura).',
    },
  },
};
