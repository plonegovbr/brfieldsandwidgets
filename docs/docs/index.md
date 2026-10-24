---
myst:
  html_meta:
    "description": "Dexterity fields and Volto widgets for data used in Brazilian projects: CEP, CNPJ, CPF, states, and phone numbers."
    "property=og:description": "Dexterity fields and Volto widgets for data used in Brazilian projects: CEP, CNPJ, CPF, states, and phone numbers."
    "property=og:title": "Brazilian Fields and Widgets for Plone"
    "keywords": "Plone, Volto, plonegovbr.brfields, volto-brwidgets, CEP, CNPJ, CPF, Brazil"
---

# Brazilian Fields and Widgets for Plone

`plonegovbr.brfields` and `@plonegovbr/volto-brwidgets` give Plone fields and widgets for data used in Brazilian projects: CEP, CNPJ, CPF, states, and phone numbers.

A content type declares a field such as `CPF` in its schema.
Plone validates every value stored in it, and Volto edits it with a widget that formats the value as the editor types.

```python
from plone.supermodel import model
from plonegovbr.brfields.fields import CNPJ


class IEmpresa(model.Schema):
    cnpj = CNPJ(title="CNPJ")
```

**Status:** beta, tested with Plone 6.1 and 6.2, and with Volto 19.5.1.
{doc}`reference/compatibility` has the full matrix and links to the changelogs.

```{warning}
This documentation was written with Claude Opus 5, following the [Plone documentation style skill](https://github.com/plone/plone-doc-style-skill), and reviewed by a human being.
```

## Where to start

The packages are two add-ons, installed together.
Install {doc}`the backend <how-to-guides/install>` first, then {doc}`the frontend <how-to-guides/install-the-frontend>`.

`````{grid} 1 1 2 2
:gutter: 3

````{grid-item-card} 🎓 Tutorials
:link: tutorials/index
:link-type: doc

Fill in every field on a development site, and watch it validate.
+++
Start here if the packages are new to you.
````

````{grid-item-card} 🛠️ How-to guides
:link: how-to-guides/index
:link-type: doc

Install the packages, apply the demo profile, and add the fields to a content type.
+++
Directions toward a result.
````

````{grid-item-card} 💡 Concepts
:link: concepts/index
:link-type: doc

Why a value is validated twice, and why it's stored as digits.
+++
Understanding, away from the keyboard.
````

````{grid-item-card} 📖 Reference
:link: reference/index
:link-type: doc

The fields, the widgets, the REST API, the vocabulary, and the profiles.
+++
Technical description of the machinery.
````
`````

## What it gives you

**Fields that validate.**
`CEP`, `CNPJ`, `CPF`, and `Telefone` refuse a value that isn't valid, whatever client stores it: a Volto form, a REST API client, or a script.

**A states vocabulary.**
`Estados` offers the 26 states and the Federal District, from the `plonegovbr.vocabulary.estados` vocabulary.

**Widgets that format as you type.**
The Volto add-on shows punctuation while the editor types, and hands Volto the digits alone.

**Validators in the browser.**
The editor learns about a wrong value on the field that holds it, before the form is sent.

**A demo profile.**
A content type that uses every field, and an example item, to try the packages on a development site.

**Stories for every widget.**
The [Storybook](https://plonegovbr.github.io/brfieldsandwidgets/storybook/) renders each widget the Volto add-on ships, built from this repository and published beside these pages.

## What you need

| Dependency | Version |
|---|---|
| Plone | 6.1 or 6.2 |
| Python | 3.11 to 3.14 |
| Volto | Developed against 19.5.1 |

```{toctree}
:maxdepth: 2
:hidden: true

tutorials/index
how-to-guides/index
concepts/index
reference/index
```

```{toctree}
:caption: Appendices
:maxdepth: 2
:hidden: true

contributing
glossary
genindex
```
