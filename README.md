# Brazilian Fields and Widgets for Plone 🚀

[![Built with Cookieplone](https://img.shields.io/badge/built%20with-Cookieplone-0083be.svg?logo=cookiecutter)](https://github.com/plone/cookiecutter-plone/)
[![Tests](https://github.com/plonegovbr/brfieldsandwidgets/actions/workflows/main.yml/badge.svg)](https://github.com/plonegovbr/brfieldsandwidgets/actions/workflows/main.yml)

A monorepo containing Python and Node packages that implement Plone Dexterity fields and Volto widgets used in Brazilian projects.

## Quick Start 🏁

### Prerequisites ✅

Ensure you have the following installed:

- **UV** 🐍 (Python dependency manager)
- **Node.js 22** 🟩
- **pnpm** 🧶 (JavaScript package manager)
- **Docker** 🐳 (Containerized environment)

### Installation 🔧

1. Clone the repository:

````sh
git clone git@github.com:plonegovbr/brfieldsandwidgets.git
cd brfieldsandwidgets
````

2. Install dependencies for both Backend and Frontend:

````sh
make install
````

### Fire Up the Servers 🔥

1. Start the **Backend** (Plone) at [http://localhost:8080/](http://localhost:8080/):

````sh
make backend-start
````

2. In a new terminal, start the **Frontend** (Volto) at [http://localhost:3000/](http://localhost:3000/):

````sh
make frontend-start
````

🎉 Your Plone development environment is now live!

## Running with Docker 📦

This setup includes:

- **Prebuilt Docker images** for Backend and Frontend 🖼️
- **A complete stack** with a Traefik router and a Postgres database 🗃️
- **Accessible at** [http://brfieldsandwidgets.localhost](http://brfieldsandwidgets.localhost) 🌐

To start the Docker-based environment, simply run:

````sh
docker compose up -d
````

Once the backend image is running, create a Plone site with:

````sh
docker compose exec backend './docker-entrypoint.sh create-site'
````

🚀 Your Plone site is now up and running locally!

## Project Structure 🏗️

This monorepo hosts two packages:

- **backend/**: Python package `plonegovbr.brfields` for Plone Dexterity fields.
- **frontend/**: React package `@plonegovbr/volto-brwidgets` for Volto widgets.

## Contributing 🤝

Contributions are welcome! If you find any issues or want to suggest improvements, please check out:

- [Source Code](https://github.com/plonegovbr/brfieldsandwidgets/) 💻
- [Issue Tracker](https://github.com/plonegovbr/brfieldsandwidgets/issues) 🐛

Every pull request requires a [Change log entruy](https://6.docs.plone.org/contributing/index.html#change-log-entry). The location of the `news` folder is the following:

- **backend**: `backend/news`
- **frontend**: `frontend/packages/volto-brwidgets/news`

### Code Quality Assurance 🧐

Ensure your code follows best practices by running the following commands:

- **Format the codebase**:

````sh
make format
````

- **Lint the code for errors and adherence to Plone standards**:

````sh
make lint
````

You can also run these commands separately in the `backend` or `frontend` folders.

### Internationalization 🌐

Easily generate translation files for both Plone and Volto:

````sh
make i18n
````

## Credits & Acknowledgements 🙏

This package is developed and maintained by the [PloneGov-BR](https://plone.org.br/gov) community ❤️.
