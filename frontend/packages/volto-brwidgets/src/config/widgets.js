// Widgets
import { CEPWidget, CEPWidgetDisplay } from '../components/CEPWidget/CEPWidget';
import { CPFWidget, CPFWidgetDisplay } from '../components/CPFWidget/CPFWidget';
import {
  CNPJWidget,
  CNPJWidgetDisplay,
} from '../components/CNPJWidget/CNPJWidget';
import {
  TelefoneWidget,
  TelefoneWidgetDisplay,
} from '../components/TelefoneWidget/TelefoneWidget';

// Validators
import { isValidCEP } from '../validators/cep';
import { isValidCPF } from '../validators/cpf';
import { isValidCNPJ } from '../validators/cpnj';
import { isValidTelefone } from '../validators/telefone';

export const registerWidgets = (config) => {
  // Widgets
  config.widgets.widget.cep = CEPWidget;
  config.widgets.widget.cpf = CPFWidget;
  config.widgets.widget.cnpj = CNPJWidget;
  config.widgets.widget.telefone = TelefoneWidget;

  // Views
  config.widgets.views.widget.cep = CEPWidgetDisplay;
  config.widgets.views.widget.cpf = CPFWidgetDisplay;
  config.widgets.views.widget.cnpj = CNPJWidgetDisplay;
  config.widgets.views.widget.telefone = TelefoneWidgetDisplay;

  // Validators
  config.registerUtility({
    type: 'validator',
    name: 'cep',
    dependencies: {
      widget: 'cep',
    },
    method: isValidCEP,
  });
  config.registerUtility({
    type: 'validator',
    name: 'cnpj',
    dependencies: {
      widget: 'cnpj',
    },
    method: isValidCNPJ,
  });
  config.registerUtility({
    type: 'validator',
    name: 'cpf',
    dependencies: {
      widget: 'cpf',
    },
    method: isValidCPF,
  });
  config.registerUtility({
    type: 'validator',
    name: 'telefone',
    dependencies: {
      widget: 'telefone',
    },
    method: isValidTelefone,
  });
  return config;
};
