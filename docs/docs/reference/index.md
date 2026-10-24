---
myst:
  html_meta:
    "description": "Technical description of the fields, the vocabulary, the REST API, the profiles, and the Volto widgets."
    "property=og:description": "Technical description of the fields, the vocabulary, the REST API, the profiles, and the Volto widgets."
    "property=og:title": "Reference"
    "keywords": "Plone, Volto, plonegovbr.brfields, volto-brwidgets, reference"
---

(reference-index)=

# Reference

This part of the documentation describes the machinery.
It states what each part is, not how to use it.
For directions toward a result, see {doc}`/how-to-guides/index`.

```{toctree}
:maxdepth: 1
:hidden: true

fields
vocabularies
rest-api
profiles
widgets
compatibility
```

## Backend

`````{grid} 1 1 2 2
:gutter: 3

````{grid-item-card} Fields
:link: fields
:link-type: doc

The Dexterity fields, the values each one accepts, and the helpers that validate them.
````

````{grid-item-card} Vocabularies
:link: vocabularies
:link-type: doc

The `plonegovbr.vocabulary.estados` vocabulary, its tokens, and its titles.
````

````{grid-item-card} REST API
:link: rest-api
:link-type: doc

How `plone.restapi` describes each field in a schema, and serializes its value.
````

````{grid-item-card} Profiles
:link: profiles
:link-type: doc

The GenericSetup profiles the package ships, and what each one applies.
````
`````

## Frontend

`````{grid} 1 1 2 2
:gutter: 3

````{grid-item-card} Volto add-on
:link: widgets
:link-type: doc

The widgets, validators, and components the Volto add-on registers and exports.
````

````{grid-item-card} Storybook
:link: https://plonegovbr.github.io/brfieldsandwidgets/storybook/

Every widget the Volto add-on ships, rendered with its props.
````
`````

## Support

`````{grid} 1 1 2 2
:gutter: 3

````{grid-item-card} Compatibility
:link: compatibility
:link-type: doc

The Plone, Python, and Volto versions tested, the user interfaces, and the changelogs.
````
`````
