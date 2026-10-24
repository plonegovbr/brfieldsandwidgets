---
myst:
  html_meta:
    "description": "Directions for installing the Brazilian fields and widgets, applying the demo profile, and adding the fields to a content type."
    "property=og:description": "Directions for installing the Brazilian fields and widgets, applying the demo profile, and adding the fields to a content type."
    "property=og:title": "How-to guides"
    "keywords": "Plone, Volto, plonegovbr.brfields, volto-brwidgets, how-to, guides, install"
---

(how-to-guides-index)=

# How-to guides

This part of the documentation contains directions toward a result.
Each guide assumes you already know what you want and shows you how to get it.

If you are meeting the packages for the first time, work through {doc}`/tutorials/explore-the-fields` instead.

```{toctree}
:maxdepth: 1
:hidden: true

install
install-the-frontend
use-the-demo-profile
add-fields-to-a-content-type
```

## Getting set up

`````{grid} 1 1 2 2
:gutter: 3

````{grid-item-card} Install the backend
:link: install
:link-type: doc

Add `plonegovbr.brfields` to a Plone project, and install its profile in a site.
````

````{grid-item-card} Install the frontend
:link: install-the-frontend
:link-type: doc

Add `@plonegovbr/volto-brwidgets` to a Volto project, so editors get the widgets.
````

````{grid-item-card} Use the demo profile
:link: use-the-demo-profile
:link-type: doc

Apply the profile that adds a content type using every field, and an example item.
````
`````

## Using the fields

`````{grid} 1 1 2 2
:gutter: 3

````{grid-item-card} Add the fields to a content type
:link: add-fields-to-a-content-type
:link-type: doc

Declare the fields in a Dexterity schema, group them in fieldsets, and check what the REST API serves.
````
`````

```{seealso}
The Diátaxis framework calls this class of documentation [how-to guides](https://diataxis.fr/how-to-guides/).
```
