/**
 * CEPWidget Storybook
 * @module components/CEPWidget/CEPWidget.stories
 */
import React from 'react';
import { CEPWidget, CEPWidgetDisplay } from './CEPWidget';

export default {
  title: 'Widgets/CEPWidget',
  component: CEPWidget,
  argTypes: {
    onChange: { action: 'changed' },
    onBlur: { action: 'blurred' },
    onClick: { action: 'clicked' },
  },
  parameters: {
    docs: {
      description: {
        component:
          'Widget para entrada e formatação de CEP (Código de Endereçamento Postal) brasileiro.',
      },
    },
  },
};

const Template = (args) => <CEPWidget {...args} />;

export const Default = Template.bind({});
Default.args = {
  id: 'cep',
  title: 'CEP',
  description: 'Digite o CEP no formato 99999-999',
  required: false,
  value: '',
  placeholder: '00000-000',
};

export const WithValue = Template.bind({});
WithValue.args = {
  id: 'cep',
  title: 'CEP',
  description: 'CEP com valor preenchido',
  value: '01310100',
};

export const Required = Template.bind({});
Required.args = {
  id: 'cep',
  title: 'CEP',
  description: 'Campo obrigatório',
  required: true,
  value: '',
};

export const Disabled = Template.bind({});
Disabled.args = {
  id: 'cep',
  title: 'CEP',
  description: 'Campo desabilitado',
  value: '01310100',
  isDisabled: true,
};

export const WithError = Template.bind({});
WithError.args = {
  id: 'cep',
  title: 'CEP',
  description: 'Campo com erro de validação',
  value: '12345',
  error: ['CEP inválido'],
};

// Display Component Stories
const DisplayTemplate = (args) => <CEPWidgetDisplay {...args} />;

export const DisplayDefault = DisplayTemplate.bind({});
DisplayDefault.args = {
  value: '01310100',
  className: '',
};
DisplayDefault.parameters = {
  docs: {
    description: {
      story: 'Componente de exibição do CEP formatado (somente leitura).',
    },
  },
};
