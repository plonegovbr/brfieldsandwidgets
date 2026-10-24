---
myst:
  html_meta:
    "description": "Apply the demo profile of plonegovbr.brfields to get a content type with every field, and an example item."
    "property=og:description": "Apply the demo profile of plonegovbr.brfields to get a content type with every field, and an example item."
    "property=og:title": "How to use the demo profile"
    "keywords": "Plone, plonegovbr.brfields, demo, profile, example content"
---

(howto-use-the-demo-profile)=

# How to use the demo profile

This guide shows you how to apply the demo profile, which adds a content type using every field and an example item.

```{warning}
The demo profile changes the site's title and the root's blocks.
Apply it on a development or test site only.
```

## Prerequisites

-   {doc}`install`.
-   `plone.exportimport` installed in the backend, as in every Plone 6.1 or later release.

## Apply the profile

Go to {menuselection}`Site Setup --> Add-ons`, and install **Brazilian Fields for Dexterity and Volto: Example content**.

To apply it from code instead, run its import steps.

```python
from plone import api

setup_tool = api.portal.get_tool("portal_setup")
setup_tool.runAllImportStepsFromProfile("profile-plonegovbr.brfields:demo")
```

The site now has the `DemoContent` content type, and an item named **Exemplo** at its root.

To create a site with the profile applied from this repository, run the following command from the `backend` folder.

```shell
make create-site
```

See {doc}`/reference/profiles` for everything the profile applies.
