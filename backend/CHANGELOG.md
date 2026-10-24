# Changelog

<!-- towncrier release notes start -->

## 1.0.0b1 (2026-10-23)


### Breaking changes:

- Support Plone 6.1 and 6.2 on Python 3.11 to 3.14, and drop support for Plone 6.0 and Python 3.10. @ericof [#4](https://github.com/plonegovbr/brfieldsandwidgets/issues/4)


### New features:

- Validate CEP, CNPJ, CPF, and phone numbers with the brutils library instead of validate-docbr. A CEP may now be punctuated with a dot, and a landline number must start with a digit from 2 to 5 after the area code. @ericof [#1](https://github.com/plonegovbr/brfieldsandwidgets/issues/1)


### Bug fixes:

- Fix the add permission of the demo content type, which named a permission that does not exist, so no one could add a `DemoContent` item. @ericof [#4](https://github.com/plonegovbr/brfieldsandwidgets/issues/4)


### Tests

- Cover the fields, serializers, vocabulary, profiles, and REST API with tests, using pytest-plone 1.1. @ericof [#4](https://github.com/plonegovbr/brfieldsandwidgets/issues/4)

## 1.0.0a3 (2025-03-14)


### Bug fixes:

- Fix declaration of namespace package (plonegovbr) @ericof 

## 1.0.0a2 (2025-03-10)

No significant changes

## 1.0.0a1 (2025-03-10)

### New features:

- Add fields for CEP, CNPJ, CPF, Estados and Telefone @ericof
