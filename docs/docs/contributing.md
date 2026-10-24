---
myst:
  html_meta:
    "description": "Set up the Brazilian Fields and Widgets for Plone repository, run its tests and Storybook, and build this documentation."
    "property=og:description": "Set up the Brazilian Fields and Widgets for Plone repository, run its tests and Storybook, and build this documentation."
    "property=og:title": "Contributing"
    "keywords": "Plone, plonegovbr.brfields, volto-brwidgets, contributing, development, tests, Storybook"
---

(contributing)=

# Contributing

The repository is a monorepo holding both packages and this documentation.

| Path | Holds |
|---|---|
| `backend/` | `plonegovbr.brfields` |
| `frontend/packages/volto-brwidgets/` | `@plonegovbr/volto-brwidgets` |
| `docs/` | This documentation |

Report problems and propose changes on [GitHub](https://github.com/plonegovbr/brfieldsandwidgets).

## Set up

You need [uv](https://docs.astral.sh/uv/), Node.js 24, and [pnpm](https://pnpm.io/).

Install both packages from the repository root.

```shell
make install
```

The backend's installation also creates a site with the demo profile applied.

## Run

Start the backend at `http://localhost:8080`.

```shell
make backend-start
```

In a second terminal, start the frontend at `http://localhost:3000`.

```shell
make frontend-start
```

Log in with the username `admin` and the password `admin`.

## Test

Run both test suites from the repository root.

```shell
make test
```

Or run one of them.

```shell
make backend-test
make frontend-test
```

To see the backend's test coverage, run the following commands.

```shell
cd backend
make test-coverage
```

## Format and lint

```shell
make format
make lint
```

`make lint` also checks the types of the frontend add-on, as continuous integration does.

## Storybook

Every widget has stories next to its source, in `*.stories.tsx` files.
Start Storybook at `http://localhost:6006`.

```shell
make storybook-start
```

## Documentation

This documentation is written in {term}`MyST`, and structured following {term}`Diátaxis`.
Preview it while you edit.

```shell
make docs-live
```

Before proposing a change, build it and run the checks continuous integration runs.

```shell
cd docs
make html
make linkcheckbroken
make vale
```

## Changelog

Every change carries a news fragment, in the folder of the part it changes.

| Part | Folder |
|---|---|
| The repository | `news/` |
| `plonegovbr.brfields` | `backend/news/` |
| `@plonegovbr/volto-brwidgets` | `frontend/packages/volto-brwidgets/news/` |

Name a fragment after its issue, as `42.bugfix`, or with a short slug, as `+new-field.feature`.
Its type is one of `breaking`, `feature`, `bugfix`, `internal`, `documentation`, or `tests`.
