---
myst:
  html_meta:
    "description": "Why Brazilian Fields and Widgets for Plone validates a value in the browser and on the server, and why it stores digits only."
    "property=og:description": "Why Brazilian Fields and Widgets for Plone validates a value in the browser and on the server, and why it stores digits only."
    "property=og:title": "Validation and formatting"
    "keywords": "Plone, Volto, plonegovbr.brfields, volto-brwidgets, validation, CPF, CNPJ, mask"
---

(concepts-validation)=

# Validation and formatting

A CPF, a CNPJ, a CEP, and a phone number are all strings of digits that people read with punctuation.
Most of the design of these packages follows from keeping those two forms apart.

## Two packages, one contract

The backend package owns the data.
Its fields decide what a valid value is, and they refuse anything else, wherever it comes from: a Volto form, a REST API client, a migration script, or an import.

The frontend package owns the editing experience.
Its widgets show punctuation while the editor types, and its validators warn about a wrong value before the form is sent.

The two meet in the schema the REST API serves.
Each backend field names a widget, such as `cpf`, and the frontend add-on registers a widget under that name.
Neither package imports the other, so either one can be replaced, as long as the names still match.

## Why validate twice

The browser checks a value so the editor learns about a mistake at once, on the field that has it.
The server checks it again because the browser is only one of the ways a value arrives.

The server's check is the one that counts.
A value that only the frontend validated is not guaranteed to be valid, while a value stored through the backend is, whatever client stored it.

Neither package writes its own check digit arithmetic.
The backend calls [brutils](https://pypi.org/project/brutils/), and the frontend calls [@brazilian-utils/brazilian-utils](https://www.npmjs.com/package/@brazilian-utils/brazilian-utils), two libraries maintained by the same community.
Their rules are close but not identical.
For example, the frontend library accepts some mobile numbers that the backend refuses.
When they disagree, the backend wins, and the editor sees its error when saving.

## Why store digits only

The widgets hand Volto the digits of a value, and add the punctuation back only to show it.
A stored CPF is `37731335453`, not `377.313.354-53`.

Digits are the value; punctuation is a way of showing it.
Storing one form makes values comparable, searchable, and easy to pass to other systems, which seldom agree on punctuation.

The backend fields still accept some punctuated forms, such as a CNPJ written `11.222.333/0001-81`, so values set from code or imported from elsewhere are not refused only for their formatting.
{doc}`/reference/fields` lists what each field accepts.

## Privacy of a CPF

A CPF identifies a person.
The backend package has a helper, `mascara_cpf`, that hides all but the middle digits, and the CPF view widget shows such a masked value as it is.
Whether a site shows a full CPF is a decision for the site, not for these packages.
