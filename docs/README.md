# Brazilian Fields and Widgets for Plone

Documentation for Brazilian Fields and Widgets for Plone.

This project provides a Sphinx-based documentation environment, powered by the [Plone Sphinx Theme](https://github.com/plone/plone-sphinx-theme).
It's generated using the `documentation_starter` template from [Cookieplone](https://github.com/plone/cookieplone).


## Prerequisites

-   [uv](https://docs.astral.sh/uv/) is the recommended tool for managing Python versions and project dependencies.


## Build documentation

To build the HTML documentation, issue the following command.

```shell
make html
```

To build the HTML documentation and view a live preview while editing your documentation, issue the following command.

```shell
make livehtml
```

To check for broken links in your documentation, issue the following command.

```shell
make linkcheckbroken
```

To check spelling, grammar, and style in your documentation, issue the following command.

```shell
make vale
```

For more `make` commands, issue the following command.

```shell
make help
```


## Publishing

The site is deployed to GitHub Pages at [plonegovbr.github.io/brfieldsandwidgets](https://plonegovbr.github.io/brfieldsandwidgets/) on every push to `main` that touches the documentation or the frontend.

The documentation is published at the root, and Storybook under `/storybook/`, as one artifact — see `.github/workflows/tmp-docs-publish.yml`.
Both halves are rebuilt together on purpose: deploying one without the other would let the two drift apart.

The repository's Pages source must be set to **GitHub Actions**, under **Settings > Pages**.
