---
myst:
  html_meta:
    "description": "The GenericSetup profiles of plonegovbr.brfields: default, demo, and uninstall."
    "property=og:description": "The GenericSetup profiles of plonegovbr.brfields: default, demo, and uninstall."
    "property=og:title": "Profiles"
    "keywords": "Plone, GenericSetup, plonegovbr.brfields, profile, demo"
---

(reference-profiles)=

# Profiles

| Profile | Title | Version |
|---|---|---|
| `plonegovbr.brfields:default` | Brazilian Fields for Dexterity and Volto: Install | `1000` |
| `plonegovbr.brfields:demo` | Brazilian Fields for Dexterity and Volto: Example content | `1000` |
| `plonegovbr.brfields:uninstall` | Brazilian Fields for Dexterity and Volto: Uninstall | |

## `default`

-   Registers the browser layer `plonegovbr.brfields.interfaces.IBrowserLayer`.
-   Depends on `plone.volto:default`.

## `demo`

Registered only when `plone.exportimport` is installed.

-   Adds the `DemoContent` content type, using every field of the package.
-   Adds `DemoContent` to the types shown in the navigation.
-   Enables the Barceloneta theme.
-   Imports the example content: the site root's title and blocks, and a published `DemoContent` named `exemplo`.

### `DemoContent`

| Field | Type | Fieldset |
|---|---|---|
| `title` | `TextLine` | default |
| `description` | `TextLine` | default |
| `cnpj` | `CNPJ` | default |
| `cpf` | `CPF` | default |
| `estado` | `Estados` | `endereco` |
| `cep` | `CEP` | `endereco` |
| `telefone` | `Telefone` | `contato` |
| `fax` | `Telefone` | `contato` |

The type is folderish, addable anywhere, and needs the `cmf.AddPortalContent` permission.
Its behaviors are `plone.namefromtitle`, `plone.shortname`, and `plone.excludefromnavigation`.

## `uninstall`

-   Removes the browser layer.

The uninstall profile is hidden from the site creation form and the add-ons control panel.
