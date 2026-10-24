---
myst:
  html_meta:
    "description": "How plone.restapi describes and serializes the fields of plonegovbr.brfields."
    "property=og:description": "How plone.restapi describes and serializes the fields of plonegovbr.brfields."
    "property=og:title": "REST API"
    "keywords": "Plone, plone.restapi, plonegovbr.brfields, JSON schema, @types"
---

(reference-rest-api)=

# REST API

## Schema

The package registers an `IJsonSchemaProvider` adapter for each text field, in `plonegovbr.brfields.serializers.fields`.
The `@types` endpoint describes each field as a string, with the widget and the factory below.

| Field | Adapter | `widget` | `factory` |
|---|---|---|---|
| `CEP` | `CEPJsonSchemaProvider` | `cep` | `CEP` |
| `CNPJ` | `CNPJJsonSchemaProvider` | `cnpj` | `CNPJ` |
| `CPF` | `CPFJsonSchemaProvider` | `cpf` | `CPF` |
| `Telefone` | `TelefoneJsonSchemaProvider` | `telefone` | `Telefone` |

`Estados` is described as any `Choice` field, with a `vocabulary` pointing to `@vocabularies/plonegovbr.vocabulary.estados`.

```json
{
  "description": "",
  "factory": "CPF",
  "title": "CPF",
  "type": "string",
  "widget": "cpf"
}
```

## Values

A text field's value is serialized as the string stored.
An `Estados` value is serialized as its term.

```json
{
  "cpf": "37731335453",
  "estado": {
    "title": "Distrito Federal",
    "token": "DF"
  }
}
```

## Errors

Creating or updating content with a value that is not valid answers `400 Bad Request`, and the message names the field.
