---
myst:
  html_meta:
    "description": "Use the CEP, CNPJ, CPF, Estados, and Telefone fields in the schema of a Dexterity content type or behavior."
    "property=og:description": "Use the CEP, CNPJ, CPF, Estados, and Telefone fields in the schema of a Dexterity content type or behavior."
    "property=og:title": "How to add the fields to a content type"
    "keywords": "Plone, Dexterity, plonegovbr.brfields, schema, CEP, CNPJ, CPF, behavior"
---

(howto-add-fields-to-a-content-type)=

# How to add the fields to a content type

This guide shows you how to use the fields of `plonegovbr.brfields` in a Dexterity schema.

## Prerequisites

-   {doc}`install`, and {doc}`install-the-frontend` for the widgets.
-   A content type or behavior whose schema is a Python interface.

## Declare the fields

Import the fields from `plonegovbr.brfields.fields`, and use them as you use any `zope.schema` field.

```python
from plone.supermodel import model
from plonegovbr.brfields.fields import CEP
from plonegovbr.brfields.fields import CNPJ
from plonegovbr.brfields.fields import CPF
from plonegovbr.brfields.fields import Estados
from plonegovbr.brfields.fields import Telefone
from zope import schema


class IEmpresa(model.Schema):
    """A company."""

    title = schema.TextLine(title="Razão social")
    cnpj = CNPJ(title="CNPJ")
    responsavel = CPF(title="CPF do responsável", required=False)
    estado = Estados(title="Estado")
    cep = CEP(title="CEP", required=False)
    telefone = Telefone(title="Telefone")
```

Every field accepts the arguments of a `zope.schema` text line, such as `title`, `description`, `required`, and `default`.
`Estados` always uses the states vocabulary, and ignores a `vocabulary` you pass to it.

## Group them in fieldsets

Group the fields as you group any other field.

```python
model.fieldset(
    "endereco",
    label="Endereço",
    fields=["estado", "cep"],
)
```

## Check the result

Ask the REST API for the schema of your type.

```http
GET /Plone/@types/Empresa HTTP/1.1
Accept: application/json
```

The `cnpj` property has `"widget": "cnpj"` and `"factory": "CNPJ"`.
See {doc}`/reference/rest-api` for the other fields.

```{seealso}
-   {doc}`/reference/fields`, for what each field accepts.
-   {doc}`/concepts/validation`, for why a value is checked in the browser and on the server.
```
