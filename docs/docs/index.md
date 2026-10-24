---
myst:
  html_meta:
    "description": "Dexterity fields and Volto widgets for data used in Brazilian projects: CEP, CNPJ, CPF, states, and phone numbers."
    "property=og:description": "Dexterity fields and Volto widgets for data used in Brazilian projects: CEP, CNPJ, CPF, states, and phone numbers."
    "property=og:title": "Brazilian Fields and Widgets for Plone"
    "keywords": "Plone, Volto, plonegovbr.brfields, volto-brwidgets, CEP, CNPJ, CPF, Brazil"
---

# Brazilian Fields and Widgets for Plone

Dexterity fields and Volto widgets for data used in Brazilian projects: CEP, CNPJ, CPF, states, and phone numbers.

A content type declares a field such as `CPF` in its schema.
Plone validates every value stored in it, and Volto edits it with a widget that formats the value as the editor types.

**Status:** beta, tested with Plone 6.1 and 6.2, and with Volto 19.5.1.
{doc}`reference/compatibility` has the full matrix.

```{warning}
This documentation was written with Claude Opus 5, following the [Plone documentation style skill](https://github.com/plone/plone-doc-style-skill).
```

## Two add-ons, installed together

| Package | Is | Gives you |
|---|---|---|
| `plonegovbr.brfields` | A Plone backend add-on | The Dexterity fields, their validation, the states vocabulary, and a demo content type. |
| `@plonegovbr/volto-brwidgets` | A Volto frontend add-on | The widgets that edit and show the fields, and their validators. |

Install {doc}`the backend <how-to-guides/install>` first, then {doc}`the frontend <how-to-guides/install-the-frontend>`.

`````{grid} 1 1 2 2
:gutter: 3

````{grid-item-card} 🎓 Tutorial
:link: tutorials/explore-the-fields
:link-type: doc

Fill in every field on a development site, and watch it validate.
+++
Start here if the package is new to you.
````

````{grid-item-card} 🛠️ How-to guides
:link: how-to-guides/index
:link-type: doc

Install the packages, and add the fields to a content type.
+++
Directions toward a result.
````

````{grid-item-card} 💡 Concepts
:link: concepts/index
:link-type: doc

Why a value is validated twice, and why it is stored as digits.
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

````{grid-item-card} 🎨 Storybook
:link: https://plonegovbr.github.io/brfieldsandwidgets/storybook/

Every widget the Volto add-on ships, rendered with its props.
+++
Built from this repository and published beside these pages.
````
`````

## What you need

| | |
|---|---|
| Plone | 6.1 or 6.2 |
| Python | 3.11 to 3.14 |
| Frontend | Volto, developed against 19.5.1 |

```{toctree}
:caption: Tutorials
:maxdepth: 2
:hidden: true

tutorials/index
```

```{toctree}
:caption: How-to guides
:maxdepth: 2
:hidden: true

how-to-guides/index
```

```{toctree}
:caption: Concepts
:maxdepth: 2
:hidden: true

concepts/index
```

```{toctree}
:caption: Reference
:maxdepth: 2
:hidden: true

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
