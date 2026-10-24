---
myst:
  html_meta:
    "description": "Add the volto-brwidgets add-on to a Volto project."
    "property=og:description": "Add the volto-brwidgets add-on to a Volto project."
    "property=og:title": "How to install the frontend"
    "keywords": "Plone, Volto, volto-brwidgets, install, add-on"
---

(howto-install-the-frontend)=

# How to install the frontend

This guide shows you how to add `@plonegovbr/volto-brwidgets` to a Volto project.

Do {doc}`install` first.
The backend fields name the widgets this add-on registers.

## Requirements

| | |
|---|---|
| Volto | Developed against 19.5.1 |
| React | 18 |
| Also needs | `react-intl`, `semantic-ui-react`, both provided by Volto |

## Add the add-on

A [Cookieplone](https://github.com/plone/cookieplone) project has an add-on package of its own under `frontend/packages/`, and that package is where the project's add-ons are declared.

1.  Edit `frontend/packages/<your-addon>/package.json`, naming `@plonegovbr/volto-brwidgets` in **both** keys.

    ```json
    {
      "addons": [
        "@plonegovbr/volto-brwidgets"
      ],
      "dependencies": {
        "@plonegovbr/volto-brwidgets": "*"
      }
    }
    ```

2.  Install the dependencies.

    ```shell
    make frontend-install
    ```

3.  Restart Volto.

    ```shell
    make frontend-start
    ```

In a project without such a package, add the dependency to `frontend/package.json`, and the name to the `addons` list of `frontend/volto.config.js`.

## Verify the installation

Open the add form of a content type that uses one of the fields.
The field shows its value formatted as you type, such as `01310-100` for a CEP.

See {doc}`/reference/widgets` for everything the add-on registers.
