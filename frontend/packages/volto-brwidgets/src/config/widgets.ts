import type { ConfigType } from '@plone/registry';
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
import { isValidCNPJ } from '../validators/cnpj';
import { isValidTelefone } from '../validators/telefone';

/**
 * Register the widgets, view widgets and validators of this package.
 *
 * Each name is the widget `plonegovbr.brfields` asks for on its fields:
 * `cep`, `cnpj`, `cpf` and `telefone`.
 *
 * @param config The Volto configuration.
 * @returns The configuration, with the widgets registered.
 */
export const registerWidgets = (config: ConfigType) => {
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

export default registerWidgets;
