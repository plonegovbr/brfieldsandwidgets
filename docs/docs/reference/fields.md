---
myst:
  html_meta:
    "description": "The Dexterity fields of plonegovbr.brfields: CEP, CNPJ, CPF, Estados, and Telefone, with the values each one accepts."
    "property=og:description": "The Dexterity fields of plonegovbr.brfields: CEP, CNPJ, CPF, Estados, and Telefone, with the values each one accepts."
    "property=og:title": "Fields"
    "keywords": "Plone, Dexterity, plonegovbr.brfields, fields, CEP, CNPJ, CPF, Estados, Telefone"
---

(reference-fields)=

# Fields

The module `plonegovbr.brfields.fields` provides five fields.

| Field | Interface | Base | Widget | Error |
|---|---|---|---|---|
| `CEP` | `ICEP` | `NativeStringLine` | `cep` | `InvalidCEP` |
| `CNPJ` | `ICNPJ` | `NativeStringLine` | `cnpj` | `InvalidCNPJ` |
| `CPF` | `ICPF` | `NativeStringLine` | `cpf` | `InvalidCPF` |
| `Estados` | `IEstados` | `Choice` | Volto's select widget | `ConstraintNotSatisfied` |
| `Telefone` | `ITelefone` | `NativeStringLine` | `telefone` | `InvalidTelefone` |

Each interface and error lives in the field's own module: `fields.cep`, `fields.cnpj`, `fields.cpf`, `fields.estados`, and `fields.fone`.
Every interface extends the interface of its base, and every field provides `IFromUnicode`.

## Common behavior

-   A field that is not required accepts no value, `None`.
-   `fromUnicode` strips leading and trailing white space, then validates the value.
-   A validation error carries the rejected value as its only argument.

(reference-fields-cep)=

## `CEP`

A Brazilian postal code.

Accepts
:   Eight digits, with or without a hyphen after the fifth: `01310100` or `01310-100`.
    An empty string is accepted too.

(reference-fields-cnpj)=

## `CNPJ`

The registration number of a company.

Accepts
:   Fourteen digits whose two check digits are correct, either as digits only or fully punctuated: `11222333000181` or `11.222.333/0001-81`.

(reference-fields-cpf)=

## `CPF`

The registration number of a person.

Accepts
:   Eleven digits whose two check digits are correct, either as digits only or punctuated: `37731335453` or `377.313.354-53`.
    A number with every digit the same, such as `99999999999`, is refused.

(reference-fields-estados)=

## `Estados`

A Brazilian state, or the Federal District.

Accepts
:   A token of the `plonegovbr.vocabulary.estados` vocabulary, such as `SP`.
    An empty value skips the check.

The field always uses that vocabulary, whatever `vocabulary` or `source` you pass to it.
See {doc}`vocabularies`.

(reference-fields-telefone)=

## `Telefone`

A phone number with its area code, as digits only.

Accepts
:   A landline number: two area code digits from 1 to 9, then eight digits starting with 2 to 8, such as `1133334444`.
:   A mobile number: two area code digits from 1 to 9, then nine digits starting with 9, such as `11987654321`.

## Helpers

The module `plonegovbr.brfields.utils.dados_br` holds the checks the fields use.

| Function | Returns |
|---|---|
| `valida_cep(valor)` | Whether `valor` is a valid CEP. |
| `valida_cnpj(valor)` | Whether `valor` is a valid CNPJ. |
| `valida_cpf(valor)` | Whether `valor` is a valid CPF. |
| `valida_telefone(valor)` | Whether `valor` is a valid phone number. |
| `mascara_cpf(valor)` | The CPF with its first three and last two digits hidden, such as `***.313.354-**`. |
