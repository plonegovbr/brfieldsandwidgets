import { describe, expect, it, vi } from 'vitest';

import install from './widgets';
import applyConfig from '../index';
import { CEPWidget, CEPWidgetDisplay } from '../components/CEPWidget/CEPWidget';
import {
  CNPJWidget,
  CNPJWidgetDisplay,
} from '../components/CNPJWidget/CNPJWidget';
import { CPFWidget, CPFWidgetDisplay } from '../components/CPFWidget/CPFWidget';
import {
  TelefoneWidget,
  TelefoneWidgetDisplay,
} from '../components/TelefoneWidget/TelefoneWidget';
import { isValidCEP } from '../validators/cep';
import { isValidCNPJ } from '../validators/cnpj';
import { isValidCPF } from '../validators/cpf';
import { isValidTelefone } from '../validators/telefone';

/**
 * A configuration holding only some widgets.
 *
 * @param widget The edit widgets registered by name before.
 * @param view The view widgets registered by name before.
 * @returns The configuration.
 */
function emptyConfig(
  widget: Record<string, unknown> = {},
  view: Record<string, unknown> = {},
) {
  return {
    widgets: { widget, views: { widget: view } },
    registerUtility: vi.fn(),
  } as any;
}

describe('install', () => {
  it.each([
    ['cep', CEPWidget],
    ['cnpj', CNPJWidget],
    ['cpf', CPFWidget],
    ['telefone', TelefoneWidget],
  ])('registers the %s widget', (name, widget) => {
    expect(install(emptyConfig()).widgets.widget[name]).toBe(widget);
  });

  it.each([
    ['cep', CEPWidgetDisplay],
    ['cnpj', CNPJWidgetDisplay],
    ['cpf', CPFWidgetDisplay],
    ['telefone', TelefoneWidgetDisplay],
  ])('registers the %s view widget', (name, widget) => {
    expect(install(emptyConfig()).widgets.views.widget[name]).toBe(widget);
  });

  it.each([
    ['cep', isValidCEP],
    ['cnpj', isValidCNPJ],
    ['cpf', isValidCPF],
    ['telefone', isValidTelefone],
  ])('registers the %s validator for its widget', (name, method) => {
    expect(install(emptyConfig()).registerUtility).toHaveBeenCalledWith({
      type: 'validator',
      name,
      dependencies: { widget: name },
      method,
    });
  });

  it('keeps the widgets already registered', () => {
    const token = () => null;
    const tags = () => null;

    const config = install(emptyConfig({ token }, { tags }));

    expect(config.widgets.widget.token).toBe(token);
    expect(config.widgets.views.widget.tags).toBe(tags);
  });
});

describe('applyConfig', () => {
  it('installs the widgets and returns the configuration', () => {
    const config = emptyConfig();

    expect(applyConfig(config)).toBe(config);
    expect(config.widgets.widget.cep).toBe(CEPWidget);
    expect(config.registerUtility).toHaveBeenCalledTimes(4);
  });
});
