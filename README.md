# Brazilian Fields and Widgets for Plone 🚀

[![Built with Cookieplone](https://img.shields.io/badge/built%20with-Cookieplone-0083be.svg?logo=cookiecutter)](https://github.com/plone/cookieplone-templates/)
[![CI](https://github.com/plonegovbr/brfieldsandwidgets/actions/workflows/main.yml/badge.svg)](https://github.com/plonegovbr/brfieldsandwidgets/actions/workflows/main.yml)
[![Documentation](https://img.shields.io/badge/docs-GitHub%20Pages-0083be)](https://plonegovbr.github.io/brfieldsandwidgets/)
[![Storybook](https://img.shields.io/badge/-Storybook-ff4785?logo=Storybook&logoColor=white)](https://plonegovbr.github.io/brfieldsandwidgets/storybook/)
[![PyPI](https://img.shields.io/pypi/v/plonegovbr.brfields)](https://pypi.org/project/plonegovbr.brfields/)
[![npm](https://img.shields.io/npm/v/@plonegovbr/volto-brwidgets)](https://www.npmjs.com/package/@plonegovbr/volto-brwidgets)

Dexterity fields and Volto widgets for data used in Brazilian projects.

| Field | Holds | Shown as |
|---|---|---|
| `CEP` 🏠 | A postal code | `01310-100` |
| `CNPJ` 🏢 | The registration number of a company | `11.222.333/0001-81` |
| `CPF` 🆔 | The registration number of a person | `377.313.354-53` |
| `Estados` 📍 | A state, or the Federal District | `São Paulo` |
| `Telefone` 📞 | A phone number, landline or mobile | `(11)98765-4321` |

The backend fields validate every value stored in them.
The Volto widgets format each value while the editor types it, and warn about a wrong value before the form is sent.

📖 Read the documentation at [plonegovbr.github.io/brfieldsandwidgets](https://plonegovbr.github.io/brfieldsandwidgets/), and browse the widgets in [Storybook](https://plonegovbr.github.io/brfieldsandwidgets/storybook/).

## Packages 📦

This monorepo hosts two packages, released together:

- **`backend/`**: the Python package [`plonegovbr.brfields`](https://pypi.org/project/plonegovbr.brfields/), with the Dexterity fields.
- **`frontend/packages/volto-brwidgets/`**: the npm package [`@plonegovbr/volto-brwidgets`](https://www.npmjs.com/package/@plonegovbr/volto-brwidgets), with the Volto widgets.

## Compatibility ✅

| | |
|---|---|
| Plone | 6.1 and 6.2 |
| Python | 3.11 to 3.14 |
| Volto | 19, developed against 19.5.1 |

## Use the fields 🧩

```python
from plone.supermodel import model
from plonegovbr.brfields.fields import CNPJ
from plonegovbr.brfields.fields import CPF


class IEmpresa(model.Schema):
    cnpj = CNPJ(title="CNPJ")
    responsavel = CPF(title="CPF do responsável", required=False)
```

Then add `@plonegovbr/volto-brwidgets` to your Volto project's add-ons.
The [installation guides](https://plonegovbr.github.io/brfieldsandwidgets/how-to-guides/index.html) have the details.

## Development 💻

### Prerequisites

- **uv** 🐍 (Python dependency manager)
- **Node.js 24** 🟩
- **pnpm** 🧶 (JavaScript package manager)
- **Docker** 🐳 (optional, for the container stack)

### Installation 🔧

```shell
git clone git@github.com:plonegovbr/brfieldsandwidgets.git
cd brfieldsandwidgets
make install
```

This also creates a site with a demo content type using every field.

### Fire up the servers 🔥

Start the **Backend** (Plone) at [http://localhost:8080/](http://localhost:8080/):

```shell
make backend-start
```

In a new terminal, start the **Frontend** (Volto) at [http://localhost:3000/](http://localhost:3000/):

```shell
make frontend-start
```

### Tests and code quality 🧐

```shell
make test
make format
make lint
```

### Storybook and documentation 📚

```shell
make storybook-start
make docs-live
```

### Running with Docker 🐳

The stack builds both images from this repository, and serves them behind Traefik at [http://brfieldsandwidgets.localhost](http://brfieldsandwidgets.localhost):

```shell
make stack-create-site
make stack-start
```

## Contributing 🤝

Contributions are welcome! Check out:

- [Source Code](https://github.com/plonegovbr/brfieldsandwidgets/) 💻
- [Issue Tracker](https://github.com/plonegovbr/brfieldsandwidgets/issues) 🐛
- [Contributing guide](https://plonegovbr.github.io/brfieldsandwidgets/contributing.html) 📝

Every pull request requires a [change log entry](https://6.docs.plone.org/contributing/index.html#change-log-entry), in one of these folders:

- **repository**: `news`
- **backend**: `backend/news`
- **frontend**: `frontend/packages/volto-brwidgets/news`

## Credits & Acknowledgements 🙏

This package is developed and maintained by the [PloneGov-BR](https://plone.org.br/gov) community ❤️.
