---
myst:
  html_meta:
    "description": "Add the plonegovbr.brfields package to a Plone project, and install its profile."
    "property=og:description": "Add the plonegovbr.brfields package to a Plone project, and install its profile."
    "property=og:title": "How to install the backend"
    "keywords": "Plone, plonegovbr.brfields, install, add-on, profile"
---

(howto-install)=

# How to install the backend

This guide shows you how to add `plonegovbr.brfields` to a Plone project, and install it in a site.

## Prerequisites

-   A Plone 6.1 or 6.2 project.
-   Python 3.11 or later.

## Add the package

Add `plonegovbr.brfields` to the dependencies of your project's backend package.

```toml
dependencies = [
    "Products.CMFPlone",
    "plonegovbr.brfields",
]
```

Then install it as your project normally does.

```shell
make backend-install
```

The package declares a `plone.autoinclude.plugin` entry point, so Plone loads its ZCML without an `<include />`.

## Install it in your site

Declare the profile as a dependency of your own package's profile, in `profiles/default/metadata.xml`.

```xml
<?xml version="1.0" encoding="utf-8"?>
<metadata>
  <version>1000</version>
  <dependencies>
    <dependency>profile-plonegovbr.brfields:default</dependency>
  </dependencies>
</metadata>
```

If your project has no package of its own, install **Brazilian Fields for Dexterity and Volto: Install** from {menuselection}`Site Setup --> Add-ons` instead.

```{note}
The fields and the vocabulary work as soon as the package's ZCML is loaded.
The profile adds the package's browser layer, and depends on `plone.volto:default`.
```

## Next steps

-   {doc}`install-the-frontend`, so editors get the widgets.
-   {doc}`add-fields-to-a-content-type`.
