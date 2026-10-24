# Changelog

<!-- towncrier release notes start -->
## 1.0.0b1 (2026-10-23)

### Backend


#### Breaking changes:

- Support Plone 6.1 and 6.2 on Python 3.11 to 3.14, and drop support for Plone 6.0 and Python 3.10. @ericof [#4](https://github.com/plonegovbr/brfieldsandwidgets/issues/4)


#### New features:

- Validate CEP, CNPJ, CPF, and phone numbers with the brutils library instead of validate-docbr. A CEP may now be punctuated with a dot, and a landline number must start with a digit from 2 to 5 after the area code. @ericof [#1](https://github.com/plonegovbr/brfieldsandwidgets/issues/1)


#### Bug fixes:

- Fix the add permission of the demo content type, which named a permission that does not exist, so no one could add a `DemoContent` item. @ericof [#4](https://github.com/plonegovbr/brfieldsandwidgets/issues/4)


#### Tests

- Cover the fields, serializers, vocabulary, profiles, and REST API with tests, using pytest-plone 1.1. @ericof [#4](https://github.com/plonegovbr/brfieldsandwidgets/issues/4)



### Frontend


#### Feature

- Validate and format CEP, CNPJ, CPF, and phone numbers with the @brazilian-utils/brazilian-utils library. The phone validator now refuses a number that is neither a valid landline nor a valid mobile number. @ericof [#1](https://github.com/plonegovbr/brfieldsandwidgets/issues/1)
- Created Storybooks for the components. @humanice [#2](https://github.com/plonegovbr/brfieldsandwidgets/issues/2)


#### Bugfix

- Fix the CPF validator refusing every CPF, and the CPF widget accepting one digit more than a CPF holds. @ericof [#1](https://github.com/plonegovbr/brfieldsandwidgets/issues/1)
- Fix the CEP widget crashing when more digits than a CEP holds were typed, and the CEP and phone widgets setting the `cpf` class on their field. @ericof [#4](https://github.com/plonegovbr/brfieldsandwidgets/issues/4)


#### Internal

- Convert the add-on to TypeScript, build every widget on a shared `MaskedInputWidget`, and develop it against Volto 19.5.1. @ericof [#4](https://github.com/plonegovbr/brfieldsandwidgets/issues/4)


#### Tests

- Test every widget, validator, and helper with Vitest. @ericof [#4](https://github.com/plonegovbr/brfieldsandwidgets/issues/4)



### Project


#### Internal

- Align the repository with the cookieplone-templates monorepo add-on template: GitHub Actions workflows, Dependabot, editor settings, and container stack. @ericof [#4](https://github.com/plonegovbr/brfieldsandwidgets/issues/4)


#### Documentation

- Add the documentation, published on GitHub Pages together with Storybook. @ericof [#4](https://github.com/plonegovbr/brfieldsandwidgets/issues/4)



## 1.0.0a3 (2025-03-14)

### Backend


#### Bug fixes:

- Fix declaration of namespace package (plonegovbr) @ericof 



### Frontend

No significant changes.


## 1.0.0a2 (2025-03-10)

### Backend

No significant changes

### Frontend

#### Internal

- Fix versioning for frontend package. @ericof



## 1.0.0a1 (2025-03-10)

### Backend


#### New features:

- Add fields for CEP, CNPJ, CPF, Estados and Telefone @ericof



### Frontend

#### Feature

- Add widgets for CEP, CNPJ, CPF, Estados and Telefone @ericof
