import { describe, expect, it, vi } from 'vitest';
import React from 'react';

import { fireEvent, render, screen } from '../testing';
import { CEPWidget, CEPWidgetDisplay } from './CEPWidget/CEPWidget';
import { CNPJWidget, CNPJWidgetDisplay } from './CNPJWidget/CNPJWidget';
import { CPFWidget, CPFWidgetDisplay } from './CPFWidget/CPFWidget';
import {
  TelefoneWidget,
  TelefoneWidgetDisplay,
} from './TelefoneWidget/TelefoneWidget';

/** Each widget, with a value as stored and as shown. */
const WIDGETS = [
  {
    name: 'cep',
    Widget: CEPWidget,
    Display: CEPWidgetDisplay,
    value: '01310100',
    formatted: '01310-100',
    maxLength: 9,
  },
  {
    name: 'cnpj',
    Widget: CNPJWidget,
    Display: CNPJWidgetDisplay,
    value: '11222333000181',
    formatted: '11.222.333/0001-81',
    maxLength: 18,
  },
  {
    name: 'cpf',
    Widget: CPFWidget,
    Display: CPFWidgetDisplay,
    value: '37731335453',
    formatted: '377.313.354-53',
    maxLength: 14,
  },
  {
    name: 'telefone',
    Widget: TelefoneWidget,
    Display: TelefoneWidgetDisplay,
    value: '11987654321',
    formatted: '(11)98765-4321',
    maxLength: 14,
  },
];

describe.each(WIDGETS)(
  '$name widget',
  ({ name, Widget, Display, value, formatted, maxLength }) => {
    it('shows the value formatted', () => {
      render(<Widget id={name} title={name} value={value} />);

      expect((screen.getByRole('textbox') as HTMLInputElement).value).toBe(
        formatted,
      );
    });

    it('hands only the digits to onChange', () => {
      const onChange = vi.fn();
      render(<Widget id={name} title={name} onChange={onChange} />);

      fireEvent.change(screen.getByRole('textbox'), {
        target: { value: formatted },
      });

      expect(onChange).toHaveBeenCalledWith(name, value);
    });

    it('limits the input to the formatted length', () => {
      render(<Widget id={name} title={name} />);

      expect((screen.getByRole('textbox') as HTMLInputElement).maxLength).toBe(
        maxLength,
      );
    });

    it('keeps a length limit it is given', () => {
      render(<Widget id={name} title={name} maxLength={30} />);

      expect((screen.getByRole('textbox') as HTMLInputElement).maxLength).toBe(
        30,
      );
    });

    it('sets its own class on the field wrapper', () => {
      const { container } = render(<Widget id={name} title={name} />);

      expect(container.querySelector(`.field.${name}`)).toBeTruthy();
    });

    it('displays the value formatted', () => {
      const { container } = render(<Display value={value} />);

      const span = container.querySelector('span');
      expect(span?.textContent).toBe(formatted);
      expect(span?.className).toBe(name);
    });

    it('adds the class it is given to the display', () => {
      const { container } = render(<Display value={value} className="big" />);

      expect(container.querySelector('span')?.className).toBe(`${name} big`);
    });

    it.each([[null], [undefined], ['']])('displays nothing for %j', (empty) => {
      const { container } = render(<Display value={empty} />);

      expect(container.querySelector('span')?.textContent).toBe('');
    });
  },
);

describe('CPFWidgetDisplay', () => {
  it('shows a value masked for privacy as it is', () => {
    const { container } = render(<CPFWidgetDisplay value="***.313.354-**" />);

    expect(container.querySelector('span')?.textContent).toBe('***.313.354-**');
  });
});

describe('TelefoneWidgetDisplay', () => {
  it('formats a landline number', () => {
    const { container } = render(<TelefoneWidgetDisplay value="1133334444" />);

    expect(container.querySelector('span')?.textContent).toBe('(11)3333-4444');
  });
});
