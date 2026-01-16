/**
 * CNPJWidget Storybook
 * @module components/CNPJWidget/CNPJWidget.stories
 */
import React from 'react';
import { CNPJWidget, CNPJWidgetDisplay } from './CNPJWidget';

export default {
  title: 'Widgets/CNPJWidget',
  component: CNPJWidget,
  argTypes: {
    onChange: { action: 'changed' },
    onBlur: { action: 'blurred' },
    onClick: { action: 'clicked' },
  },
  parameters: {
    docs: {
      description: {
        component:
          'Widget para entrada e formatação de CNPJ (Cadastro Nacional de Pessoa Jurídica) brasileiro.',
      },
    },
  },
};

const Template = (args) => <CNPJWidget {...args} />;

export const Default = Template.bind({});
Default.args = {
  id: 'cnpj',
  title: 'CNPJ',
  description: 'Digite o CNPJ no formato 99.999.999/9999-99',
  required: false,
  value: '',
  placeholder: '00.000.000/0000-00',
};

export const WithValue = Template.bind({});
WithValue.args = {
  id: 'cnpj',
  title: 'CNPJ',
  description: 'CNPJ com valor preenchido',
  value: '11222333000181',
};

export const Required = Template.bind({});
Required.args = {
  id: 'cnpj',
  title: 'CNPJ',
  description: 'Campo obrigatório',
  required: true,
  value: '',
};

export const Disabled = Template.bind({});
Disabled.args = {
  id: 'cnpj',
  title: 'CNPJ',
  description: 'Campo desabilitado',
  value: '11222333000181',
  isDisabled: true,
};

export const WithError = Template.bind({});
WithError.args = {
  id: 'cnpj',
  title: 'CNPJ',
  description: 'Campo com erro de validação',
  value: '11222333000180',
  error: ['CNPJ inválido'],
};

// Display Component Stories
const DisplayTemplate = (args) => <CNPJWidgetDisplay {...args} />;

export const DisplayDefault = DisplayTemplate.bind({});
DisplayDefault.args = {
  value: '11222333000181',
  className: '',
};
DisplayDefault.parameters = {
  docs: {
    description: {
      story: 'Componente de exibição do CNPJ formatado (somente leitura).',
    },
  },
};
