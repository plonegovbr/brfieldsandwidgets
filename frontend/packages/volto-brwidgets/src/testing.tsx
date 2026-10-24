/**
 * Test-only rendering.
 *
 * The widgets render inside Volto's `FormFieldWrapper`, which formats its
 * strings through `react-intl` and throws without an `IntlProvider` above it.
 * Storybook's preview supplies one; this is its counterpart for the tests.
 *
 * Testing Library is re-exported so a test file still has a single import.
 * @module testing
 */
import React from 'react';
import type { ReactElement, ReactNode } from 'react';
import { createIntl, IntlProvider as BareIntlProvider } from 'react-intl';
import {
  render as renderBare,
  type RenderOptions,
  type RenderResult,
} from '@testing-library/react';

/**
 * `react-intl` 3.12's provider, given its children back.
 *
 * The version Volto pins types `IntlProvider` as a class component whose
 * props never mention `children`. The cast restores the prop the component
 * has always accepted and changes nothing at runtime.
 */
export const IntlProvider = BareIntlProvider as React.ComponentType<
  React.ComponentProps<typeof BareIntlProvider> & { children?: ReactNode }
>;

/**
 * No message catalogue on purpose: the tests assert on each descriptor's
 * `defaultMessage`, and "no message for this id" is the expected state.
 */
const WithIntl = ({ children }: { children: ReactNode }) => (
  <IntlProvider locale="en" defaultLocale="en" messages={{}} onError={() => {}}>
    {children}
  </IntlProvider>
);

/**
 * Render as Testing Library does, inside an `IntlProvider`.
 *
 * @param ui The element under test.
 * @param options Testing Library's own options.
 * @returns Whatever `@testing-library/react`'s `render` returns.
 */
export function render(
  ui: ReactElement,
  options?: RenderOptions,
): RenderResult {
  return renderBare(ui, { wrapper: WithIntl, ...options });
}

/**
 * An `IntlShape` for code that formats messages outside a component, such as
 * the validators.
 */
export const testIntl = createIntl({
  locale: 'en',
  defaultLocale: 'en',
  messages: {},
  onError: () => {},
});

export * from '@testing-library/react';
