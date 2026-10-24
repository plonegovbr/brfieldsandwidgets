---
myst:
  html_meta:
    "description": "The widgets, view widgets, validators, and components the volto-brwidgets add-on provides."
    "property=og:description": "The widgets, view widgets, validators, and components the volto-brwidgets add-on provides."
    "property=og:title": "Volto add-on"
    "keywords": "Plone, Volto, volto-brwidgets, widgets, validators, Storybook"
---

(reference-widgets)=

# Volto add-on

The add-on's default export installs everything below into Volto's configuration.

## Widgets

| Name | Edit widget | View widget | Shows |
|---|---|---|---|
| `cep` | `CEPWidget` | `CEPWidgetDisplay` | `01310-100` |
| `cnpj` | `CNPJWidget` | `CNPJWidgetDisplay` | `11.222.333/0001-81` |
| `cpf` | `CPFWidget` | `CPFWidgetDisplay` | `377.313.354-53` |
| `telefone` | `TelefoneWidget` | `TelefoneWidgetDisplay` | `(11)98765-4321` or `(11)3333-4444` |

The edit widgets are registered in `config.widgets.widget`, and the view widgets in `config.widgets.views.widget`, each under its name.

Every edit widget:

-   shows the value formatted while the editor types;
-   calls `onChange` and `onBlur` with the field id and the value's digits, or `undefined` when the input is empty;
-   limits the input to the length of a formatted value, unless the field sets `maxLength`;
-   sets the class of its name on the field wrapper.

`CPFWidgetDisplay` shows a value holding an asterisk as it is, so a CPF the backend masked stays masked.

## Validators

The add-on registers one `validator` utility per widget, with a dependency on that widget.

| Name | Method | Refuses |
|---|---|---|
| `cep` | `isValidCEP` | A value that is not eight digits. |
| `cnpj` | `isValidCNPJ` | A value that is not fourteen digits, or whose check digits are wrong. |
| `cpf` | `isValidCPF` | A value whose check digits are wrong. |
| `telefone` | `isValidTelefone` | A value with fewer than ten or more than eleven digits. |

A validator accepts no value, and returns the error message to show otherwise.

## Components

| Component | Module |
|---|---|
| `MaskedInputWidget` | `components/MaskedInputWidget/MaskedInputWidget` |

`MaskedInputWidget` is the text input every edit widget is built on.
It takes the props of a Volto widget, a `format` function that formats the digits of a value, and the `className` of the field wrapper.

## Storybook

Every widget has stories next to its source.
The published Storybook is at [plonegovbr.github.io/brfieldsandwidgets/storybook](https://plonegovbr.github.io/brfieldsandwidgets/storybook/).
