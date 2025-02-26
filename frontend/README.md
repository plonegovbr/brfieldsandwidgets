# Brazilian Widgets for Volto (@plonegovbr/volto-brwidgets) 🚀

Package implementing Volto widgets for fields provided by the [plonegovbr.brfields](https://github.com/plonegovbr/brfieldsandwidgets/) Plone package.

[![npm](https://img.shields.io/npm/v/@plonegovbr/volto-brwidgets)](https://www.npmjs.com/package/@plonegovbr/volto-brwidgets)
[![](https://img.shields.io/badge/-Storybook-ff4785?logo=Storybook&logoColor=white&style=flat-square)](https://plonegovbr.github.io/brfieldsandwidgets/)
[![Code analysis checks](https://github.com/plonegovbr/brfieldsandwidgets/actions/workflows/main.yml/badge.svg)](https://github.com/plonegovbr/brfieldsandwidgets/actions/workflows/main.yml)

## Features ✨

This package provides widgets for the following Dexterity fields:

- **CEP** 🏠
- **CNPJ** 🏢
- **CPF** 🆔
- **Estados** 📍
- **Telefone** 📞

## Installation 🛠️

To install this package, select the method appropriate for your Volto version.

### Volto 18 and Later

1. Add `@plonegovbr/volto-brwidgets` to your `package.json` dependencies:

````json
"dependencies": {
    "@plonegovbr/volto-brwidgets": "*"
}
````

2. Register the add-on in your `volto.config.js`:

````javascript
const addons = ['@plonegovbr/volto-brwidgets'];
````

3. Install dependencies:

````sh
make install
````

## Testing Installation 🧪

Run Volto and visit [http://localhost:3000](http://localhost:3000). Log in and verify the new widgets.

## Development 💻

Development is managed using `pnpm` workspaces, `mrs-developer`, and other Volto core improvements. This add-on is compatible only with `pnpm` and **Volto 18+**.

### Prerequisites 🔧

- [Node.js](https://6.docs.plone.org/install/create-project.html#node-js)
- [Make](https://6.docs.plone.org/install/create-project.html#make)
- [Docker](https://6.docs.plone.org/install/create-project.html#docker)

### Makefile Commands 🚀

Run `make help` to list available commands:

```text
help                             Show this help message
install                          Install the add-on in a development environment
start                            Start Volto with hot-reloading
build                            Build a production bundle
i18n                             Sync internationalization messages
ci-i18n                          Check if i18n is up to date
format                           Format the codebase
lint                             Lint the codebase
release                          Release the add-on on npmjs.org
release-dry-run                  Perform a dry-run of the release
backend-docker-start             Start a Docker-based Plone backend
storybook-start                  Start Storybook on port 6006
storybook-build                  Build Storybook
acceptance-frontend-dev-start    Start acceptance frontend in dev mode
acceptance-frontend-prod-start   Start acceptance frontend in production mode
acceptance-backend-start         Start backend acceptance server
ci-acceptance-test               Run Cypress tests in CI
```

### Development Environment Setup ⚙️

Install package requirements:

````sh
make install
````

### Start Development 🚀

1. Start the backend:

````sh
make backend-docker-start
````

2. In a separate terminal, start the frontend:

````sh
make start
````

### Code Quality ✨

#### Lint Code 🧹

Run ESLint, Prettier, and Stylelint in analyze mode:

````sh
make lint
````

#### Format Code 🖌️

Run linters in fix mode:

````sh
make format
````

### Internationalization 🌍

Extract messages for translation:

````sh
make i18n
````

### Running Unit Tests 🧪

Execute unit tests:

````sh
make test
````

## License 📜

This project is licensed under the **MIT License**.

## Credits & Acknowledgements 🙏

This package is developed and maintained by the [PloneGov-BR](https://plone.org.br/gov) community ❤️.
