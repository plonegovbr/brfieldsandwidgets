# Changelog

<!-- towncrier release notes start -->

## 1.0.0-beta.1 (2026-10-23)


### Feature

- Validate and format CEP, CNPJ, CPF, and phone numbers with the @brazilian-utils/brazilian-utils library. The phone validator now refuses a number that is neither a valid landline nor a valid mobile number. @ericof [#1](https://github.com/plonegovbr/brfieldsandwidgets/issues/1)
- Created Storybooks for the components. @humanice [#2](https://github.com/plonegovbr/brfieldsandwidgets/issues/2)


### Bugfix

- Fix the CPF validator refusing every CPF, and the CPF widget accepting one digit more than a CPF holds. @ericof [#1](https://github.com/plonegovbr/brfieldsandwidgets/issues/1)
- Fix the CEP widget crashing when more digits than a CEP holds were typed, and the CEP and phone widgets setting the `cpf` class on their field. @ericof [#4](https://github.com/plonegovbr/brfieldsandwidgets/issues/4)


### Internal

- Convert the add-on to TypeScript, build every widget on a shared `MaskedInputWidget`, and develop it against Volto 19.5.1. @ericof [#4](https://github.com/plonegovbr/brfieldsandwidgets/issues/4)


### Tests

- Test every widget, validator, and helper with Vitest. @ericof [#4](https://github.com/plonegovbr/brfieldsandwidgets/issues/4)

## 1.0.0-alpha.3 (2025-03-14)

## 1.0.0-alpha.2 (2025-03-10)

### Internal

- Fix versioning for frontend package. @ericof 

## 1.0.0 (2025-03-10)

### Feature

- Add widgets for CEP, CNPJ, CPF, Estados and Telefone @ericof
