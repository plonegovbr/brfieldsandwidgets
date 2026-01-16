/**
 * CPFWidget Storybook
 * @module components/CPFWidget/CPFWidget.stories
 */
import React from 'react';
import { CPFWidget, CPFWidgetDisplay } from './CPFWidget';

export default {
  title: 'Widgets/CPFWidget',
  component: CPFWidget,
  argTypes: {
    onChange: { action: 'changed' },
    onBlur: { action: 'blurred' },
    onClick: { action: 'clicked' },
  },
  parameters: {
    docs: {
      description: {
        component:
          'Widget para entrada e formatação de CPF (Cadastro de Pessoa Física) brasileiro.',
      },
    },
  },
};

const Template = (args) => <CPFWidget {...args} />;

export const Default = Template.bind({});
Default.args = {
  id: 'cpf',
  title: 'CPF',
  description: 'Digite o CPF no formato 999.999.999-999',
  required: false,
  value: '',
  placeholder: '000.000.000-00',
};

export const WithValue = Template.bind({});
WithValue.args = {
  id: 'cpf',
  title: 'CPF',
  description: 'CPF com valor preenchido',
  value: '12345678909',
};

export const Required = Template.bind({});
Required.args = {
  id: 'cpf',
  title: 'CPF',
  description: 'Campo obrigatório',
  required: true,
  value: '',
};

export const Disabled = Template.bind({});
Disabled.args = {
  id: 'cpf',
  title: 'CPF',
  description: 'Campo desabilitado',
  value: '12345678909',
  isDisabled: true,
};

export const WithError = Template.bind({});
WithError.args = {
  id: 'cpf',
  title: 'CPF',
  description: 'Campo com erro de validação',
  value: '12345678900',
  error: ['CPF inválido'],
};

// Display Component Stories
const DisplayTemplate = (args) => <CPFWidgetDisplay {...args} />;

export const DisplayDefault = DisplayTemplate.bind({});
DisplayDefault.args = {
  value: '12345678909',
  className: '',
};
DisplayDefault.parameters = {
  docs: {
    description: {
      story: 'Componente de exibição do CPF formatado (somente leitura).',
    },
  },
};

export const DisplayMasked = DisplayTemplate.bind({});
DisplayMasked.args = {
  value: '***.***.***-09',
  className: '',
};
DisplayMasked.parameters = {
  docs: {
    description: {
      story: 'Componente de exibição do CPF com máscara de privacidade.',
    },
  },
};
