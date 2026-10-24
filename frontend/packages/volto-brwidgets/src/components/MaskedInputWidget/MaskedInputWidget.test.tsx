import { describe, expect, it, vi } from 'vitest';
import React from 'react';

import { fireEvent, render, screen } from '../../testing';
import MaskedInputWidget from './MaskedInputWidget';
import { applyMask } from '../../helpers/format';

const format = (value?: string | null) => applyMask(value, '99-99');

/**
 * Render the widget with the props a test needs.
 *
 * @param props Props to add or override.
 * @returns What Testing Library's `render` returns, and the input.
 */
function renderWidget(props: Record<string, unknown> = {}) {
  const result = render(
    <MaskedInputWidget
      id="code"
      title="Code"
      format={format}
      className="code"
      {...props}
    />,
  );
  const input = screen.getByRole('textbox') as HTMLInputElement;
  return { ...result, input };
}

describe('MaskedInputWidget', () => {
  it('shows the value formatted', () => {
    const { input } = renderWidget({ value: '1234' });

    expect(input.value).toBe('12-34');
  });

  it('shows an empty input for no value', () => {
    const { input } = renderWidget({ value: null });

    expect(input.value).toBe('');
  });

  it('formats the value as the editor types', () => {
    const { input } = renderWidget();

    fireEvent.change(input, { target: { value: '123' } });

    expect(input.value).toBe('12-3');
  });

  it('hands only the digits to onChange', () => {
    const onChange = vi.fn();
    const { input } = renderWidget({ onChange });

    fireEvent.change(input, { target: { value: '12-34' } });

    expect(onChange).toHaveBeenCalledWith('code', '1234');
  });

  it('hands undefined to onChange when the input is cleared', () => {
    const onChange = vi.fn();
    const { input } = renderWidget({ value: '1234', onChange });

    fireEvent.change(input, { target: { value: '' } });

    expect(onChange).toHaveBeenCalledWith('code', undefined);
  });

  it('hands only the digits to onBlur', () => {
    const onBlur = vi.fn();
    const { input } = renderWidget({ value: '1234', onBlur });

    fireEvent.blur(input);

    expect(onBlur).toHaveBeenCalledWith('code', '1234');
  });

  it('calls onClick', () => {
    const onClick = vi.fn();
    const { input } = renderWidget({ onClick });

    fireEvent.click(input);

    expect(onClick).toHaveBeenCalled();
  });

  it('works without any callback', () => {
    const { input } = renderWidget();

    fireEvent.change(input, { target: { value: '1' } });
    fireEvent.blur(input);
    fireEvent.click(input);

    expect(input.value).toBe('1');
  });

  it('names the input after the field', () => {
    const { input } = renderWidget();

    expect(input.id).toBe('field-code');
    expect(input.name).toBe('code');
  });

  it('shows the title as label', () => {
    renderWidget();

    expect(screen.getByText('Code')).toBeTruthy();
  });

  it('shows the validation errors', () => {
    renderWidget({ error: ['Invalid code'] });

    expect(screen.getByText('Invalid code')).toBeTruthy();
  });

  it('can be disabled', () => {
    const { input } = renderWidget({ isDisabled: true });

    expect(input.disabled).toBe(true);
  });

  it('passes the placeholder and the length limits to the input', () => {
    const { input } = renderWidget({
      placeholder: '00-00',
      minLength: 5,
      maxLength: 5,
    });

    expect(input.placeholder).toBe('00-00');
    expect(input.minLength).toBe(5);
    expect(input.maxLength).toBe(5);
  });

  it('sets the class of the field wrapper', () => {
    const { container } = renderWidget();

    expect(container.querySelector('.field.code')).toBeTruthy();
  });
});
